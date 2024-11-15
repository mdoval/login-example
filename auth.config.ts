import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { loginSchema } from "./schema/authSchema";
import { db } from "./lib/db";
import bcrypt from 'bcryptjs'

// Notice this is only an object, not a full Auth.js instance
export default {
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const {data, success} = loginSchema.safeParse(credentials)

        if (!success) {
          throw new Error("Credenciales invalidas");
        }
        // Verificar si usuario existe en la DB
        const user = await db.user.findFirst({
          where: {
            email: data.email
          }
        })

        if(!user || !user.password ) {
          throw new Error("No user found")
        }
        // Verificar si la contraseña es correcta
        const isValid = await bcrypt.compare(data.password, user.password)

        if(!isValid) {
          throw new Error("Incorrect Password")
        }

        return user
      },
    }),
  ],
} satisfies NextAuthConfig;
