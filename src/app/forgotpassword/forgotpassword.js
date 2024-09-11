'use server'
import nodemailer from 'nodemailer'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
export async function forgotpassword(prevStare, formData) {


    const username = process.env.EMAIL_SERVER_USER;
    const password = process.env.EMAIL_SERVER_PASSWORD;
    const myEmail = process.env.EMAIL_FROM;
    const email = formData.get('email')
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        tls: {
            ciphers: "SSLv3",
            rejectUnauthorized: false,
        },

        auth: {

            user: username,
            pass: password
        }
    });

    try {
        const { token } = await generateUniqueToken(email);
        const existingToken = await prisma.verificationToken.findFirst({
            where: {
                identifier: email,
            },
        });

        if (existingToken) {
            // Update the existing record with a new token and expiration
            await prisma.verificationToken.updateMany({
                where: {
                    identifier: email,
                },
                data: {
                    token,
                    expires: new Date(Date.now() + 60 * 60 * 1000), // Example expiration time: 1 hour
                },
            });
        } else {
            // Create a new record
            await prisma.verificationToken.create({
                data: {
                    identifier: email,
                    token,
                    expires: new Date(Date.now() + 60 * 60 * 1000), // Example expiration time: 1 hour
                },
            });
        }
        const mail = await transporter.sendMail({
            from: myEmail,
            to: email,
            subject: `Reset Password`,
            html: `
            <p>Reset Password <a href="${process.env.NEXTAUTH_URL}/forgotpassword/callback?email=${email}&token=${token}" >clickme</a></p>
            `,
        })

        return { message: "email was sent pls check you email" }

    } catch (error) {
        console.log(error)
        return { message: "COULD NOT SEND MESSAGE" }
    }
}


import crypto from 'crypto';

// Function to generate a random token
function generateRandomToken(length = 32) {
    return crypto.randomBytes(length).toString('hex');
}

// Function to check if a token exists in the database
async function tokenExists(identifier, token) {
    const existingToken = await prisma.verificationToken.findUnique({
        where: {
            identifier_token: {
                identifier,
                token,
            },
        },
    });
    return existingToken !== null;
}

// Function to generate a unique token
export async function generateUniqueToken(identifier) {
    let token;
    let unique = false;

    while (!unique) {
        token = generateRandomToken();
        unique = !(await tokenExists(identifier, token));
    }

    return { token, identifier };
}