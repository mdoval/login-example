import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const paginasAdministrativas = ["/admin"]

export async function middleware(req: NextRequest) {
  const session = await getToken({req, secret: process.env.AUTH_SECRET})  
  console.log(session)

  if(!session) {
    return NextResponse.redirect(new URL("/login", req.url))
  }  
  if(paginasAdministrativas.includes(req.nextUrl.pathname) && session.role !== "admin") {
    return NextResponse.redirect(new URL("/error", req.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/admin', '/profile', '/dashboard']
};

/*
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)","/admin"],
};
*/

