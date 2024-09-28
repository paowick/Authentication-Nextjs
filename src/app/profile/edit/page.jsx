import React from 'react'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import Edituser from '@/app/profile/edit/Edituser';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export default async function Edit() {
  const session = await getServerSession(authOptions);
  const user = await prisma.user.findUnique({
    where:{ id : session.user.id }
  })
  return (
    <>
    <Edituser user={user} />
    </>
  )
}
