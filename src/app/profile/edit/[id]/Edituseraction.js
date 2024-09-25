'use server'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
export async function Edituseraction(formData,id) {
    console.log(formData,id);
    const updateUser = await prisma.user.update({
        where: {
            id : id
        },
        data: {
            name : formData.name,
            role : formData.role
        },
    })
}