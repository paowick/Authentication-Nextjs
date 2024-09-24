'use server'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import { redirect } from 'next/navigation'
export async function Deleteuser(id) {
    console.log(id);
    const deleteUser = await prisma.user.delete({
        where: {
            id: id,
        },
    })
    return redirect('/admin/user-mgmt')
}