import React from 'react'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import Edituser from '@/app/profile/edit/[id]/Edituser';

export default async function Edit({params}) {
  const user = await prisma.user.findUnique({
    where:{ id : parseInt(params.id) }
  })
  return (
    <>
    <Edituser user={user} />
    </>
  )
}
