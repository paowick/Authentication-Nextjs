'use server'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import { redirect } from 'next/navigation'
const prisma = new PrismaClient()
export async function changepassword(prevStare, Data) {

    const user = await prisma.user.findUnique({
        where: { id: Data.id },
    })
    const oldpasswordCorrect = await bcrypt.compare(Data.oldpassword, user.password)
    if(!oldpasswordCorrect) return { message: "Old Password was incorrect" }
    if (Data.newpassword !== Data.confrimpassword) {
        return { message: "password not match" }
    }
    const hashedPassword = bcrypt.hashSync(Data.newpassword, 10)
    await prisma.user.update({
        where: {
            id : Data.id
        },
        data: {
            password: hashedPassword,
        },
    })
    return redirect('/profile')
}