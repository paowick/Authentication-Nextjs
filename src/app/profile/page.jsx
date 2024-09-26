"use server";
import Profile from "./Profile";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from 'next/navigation'
export default async function Page() {
  const session = await getServerSession(authOptions);


  if(!session?.user){
    redirect('/signin')
  }
  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
  });
  if(user.name === null){
    redirect('/userinit')
  }
  return <Profile user={user} />;
}
