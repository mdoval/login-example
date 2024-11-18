import NextAuth from "next-auth";
import authConfig from "./auth.config";

//import { PrismaClient } from "@prisma/client"
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "./lib/db";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(db),
  ...authConfig,
  session: { strategy: "jwt" },
  callbacks: {
    //jwt() se ejecuta cada vez que se crea o actualiza un token JWT
    //Aca se puede agregar informacion al token
    jwt({ token, user }) {
      if (user) {
        // User is available during sign-in
        //token.id = user.id;
        token.role = user.role
      }
      return token;
    },

    //session() se utiliza para agregar la informacion del token a la sesion  del usuario
    // lo que hace que este disponible en el cliente.
     session({ session, token }) {
      //session.user.id = token.id as string
      session.user.role = token.role 
      return session
    },
  },
});
