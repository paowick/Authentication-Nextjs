import AdminNavbar from '@/app/components/AdminNavbar'
import UserTable from '@/app/components/UserTable'
import React from 'react'
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function UserManagement() {
  const users = await prisma.user.findMany()
  return (
    <>
    <div>UserManagement</div>
    <AdminNavbar/>
    <UserTable users={users}/>
    </>
  )
}
