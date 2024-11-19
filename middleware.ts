import { auth } from "@/auth";
import { NextResponse } from "next/server";

const urlsProtegidas = ["/profile","/dashboard"]

export default auth((req) => {
      const isLogged: boolean= !!req.auth
      //console.log(`Esta logueado?: ${isLogged}`)
      const url:string = req.nextUrl.pathname
      const urlProtected: boolean = urlsProtegidas.includes(url)

      if(isLogged) {
        const user = req.auth?.user       

        //console.log(`El Usuario logueado es ${user?.email} con el ROL ${user?.role}`)
        //console.log(`La URL a la que estoy ingresando es ${req.nextUrl.pathname}`)

      } else {
        if(urlProtected) {
          return NextResponse.redirect(new URL("/login",req.url))
        } 
      }
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
