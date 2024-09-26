'use server'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
export async function Edituseraction(formData) {
    const session = await getServerSession(authOptions)
    const updateUser = await prisma.user.update({
        where: {
            id : session.user.id
        },
        data: {
            name : formData.name,
            role : formData.role
        },
    })
    return redirect('/profile')
    
}