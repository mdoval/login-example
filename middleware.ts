import { NextRequest, NextResponse } from "next/server";
import { auth } from "./auth";
//import { getToken } from "next-auth/jwt";

const paginasAdministrativas = ["/admin"]

export async function middleware(req: NextRequest) {
  //const session = await getToken({req, secret: process.env.AUTH_SECRET})  
  
  const session = await auth();
  console.log(session)

  if(!session) {
    return NextResponse.redirect(new URL("/login", req.url))
  }  
  if(paginasAdministrativas.includes(req.nextUrl.pathname) && session.user.role !== "admin") {
    return NextResponse.redirect(new URL("/error", req.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/admin', '/profile', '/dashboard']
};
