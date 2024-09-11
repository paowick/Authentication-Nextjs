import { NextResponse } from 'next/server'
import bcrypt from 'bcrypt'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
export async function POST(req) {
    const { email, token, newpassword, confrimpassword } = await req.json()

    if (newpassword !== confrimpassword) {

        return Response.json({ Msg: "password not match" }, { status: 400 });
    }

    const verificationTokentoken = await prisma.verificationToken.findFirst({
        where: {
            identifier: email,
            token
        }
    })

    if (!verificationTokentoken) {
        deleteToken(email, token)
        return NextResponse.json({ Msg: "Invalid token pls try again" }, { status: 400 });
    }
    // Check if the token has expired
    const now = new Date();
    if (new Date(verificationTokentoken.expires) < now) {
        deleteToken(email, token)
        return NextResponse.json({ Msg: "Token has expired pls try again" }, { status: 400 });
    }

    console.log(verificationTokentoken);


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
    return Response.json({ Msg: "",isPass: true }, { status: 200 });
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