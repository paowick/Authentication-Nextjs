'use server'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import { redirect } from 'next/navigation'


const prisma = new PrismaClient()

export async function signup(prevState, formData) {
    const [isAcceptedValidation, Msg] = await validation(formData)
    if (!isAcceptedValidation) {
        return { message: Msg }
    }
    const hashedPassword = bcrypt.hashSync(formData.get('password'), 10)
    const user = await prisma.user.create({
        data: {
            email: formData.get('email'),
            password: hashedPassword,
            name: formData.get('username'),
        },
    })
    
    return redirect('/signin')
    // return { message: Msg }

}

async function validation(Data) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(Data.get('email'))) {
        return [false, 'Please enter a valid email address.'];
    }
    if (Data.get('password') !== Data.get('confirmpassword')) {
        return [false, 'Password and Confirm Password must match.'];
    }

    const user = await prisma.user.findUnique({
        where: {
            email: Data.get('email')
        }
    })    
    if (user !== null) return [false, 'you has been signup']
    // if (Data.get('password').length < 6) return [false,'Password is too short.']
    return [true, '']
}