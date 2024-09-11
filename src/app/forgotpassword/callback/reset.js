'use server'
import bcrypt from 'bcrypt'
import { redirect } from 'next/navigation'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


export async function reset(prevState, Data) {
    const { email, token, newpassword, confrimpassword } = Data
    if (newpassword !== confrimpassword) {
        return { message: "password not match" }
    }
    const verificationTokentoken = await prisma.verificationToken.findFirst({
        where: {
            identifier: email,
            token
        }
    })
    if (!verificationTokentoken) {
        deleteToken(email, token)
        return { message: "Invalid token pls try again" }
    }
    // Check if the token has expired
    const now = new Date();
    if (new Date(verificationTokentoken.expires) < now) {
        deleteToken(email, token)
        return { message: "Token has expired pls try again" }
    }
    const hashedPassword = bcrypt.hashSync(newpassword, 10)
    const user = await prisma.user.update({
        where: {
            email: email
        },
        data: {
            password: hashedPassword,
        },
    })
    deleteToken(email, token)
    return redirect('/signin')
}
async function deleteToken(email, token) {
    await prisma.verificationToken.delete({
        where: {
            identifier_token: {
                identifier: email,
                token
            }
        }
    });
}