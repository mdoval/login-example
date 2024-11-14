"use server";

import { User } from "@/types/User";
import { revalidatePath } from "next/cache";
import { signIn } from "@/auth";
import { signInSchema } from "@/schema/siginSchema";
import { AuthError } from "next-auth";

export async function login(prevState: unknown | null, formData: FormData) {
  try {
    const user: User = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    const result = signInSchema.safeParse(user);
    if (!result.success) {
      return {
        errors: result.error.flatten().fieldErrors,
      };
    }
    await signIn("credentials", { ...result.data, ...{ redirect: false } });
    return { success: true }
//    redirect("/dashboard")
    //console.log({ ...result.data, ...{ redirect: false } });
  } catch (error) {
    if(error instanceof AuthError) {
      return { error: error.cause?.err?.message }      
    }
    return { error: "Error 500" }
  }
  
}