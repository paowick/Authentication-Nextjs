import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'

export async function middleware(request) {
  const user = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  })

  // console.log(user);
  

  // Get the pathname of the request
  const { pathname } = request.nextUrl
  const pathadmin = pathname.startsWith('/admin') 
 //  console.log(pathadmin);
  
  // If the pathname starts with /protected and the user is not an admin, redirect to the home page
  if (pathadmin) {
    if(!user){
      if(pathadmin) return NextResponse.next()
      return NextResponse.redirect(new URL('/admin', request.url))
    }
    if(user.role !== 'admin'){
      return NextResponse.redirect(new URL('/', request.url))
    }
    return NextResponse.next()
  }

  // Continue with the request if the user is an admin or the route is not protected
  return NextResponse.next()
}