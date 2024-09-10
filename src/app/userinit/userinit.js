'use server'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../api/auth/[...nextauth]/route'

const prisma = new PrismaClient()

export async function userinit(prevState, formData) {
    const session = await getServerSession(authOptions)
    const [isAcceptedValidation, Msg] = await validation(formData)
    if (!isAcceptedValidation) {
        return { message: Msg }
    }
    const hashedPassword = bcrypt.hashSync(formData.get('password'), 10)
    const user = await prisma.user.update({
        where:{
            email: session.user.email
        },
        data: {
            password: hashedPassword,
            name: formData.get('username'),
        },
    })
    
    return redirect('/')
    // return { message: Msg }

}

async function validation(Data) {
    if (Data.get('password') !== Data.get('confirmpassword')) {
        return [false, 'Password and Confirm Password must match.'];
    }
    return [true, '']
}