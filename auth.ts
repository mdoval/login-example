import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { signInSchema } from "./schema/siginSchema";
import { saltAndHashPassword } from ""

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials)  => {
        try {
          let user = null
          const { email, password} = await signInSchema.parseAsync(credentials)

          const pwHash = 
        }
      }
    }),
  ],
});
