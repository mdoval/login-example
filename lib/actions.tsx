'use server'

import { User } from "@/types/User";
import { revalidatePath } from "next/cache";
import { signIn } from "@/auth"
import { signInSchema } from "@/schema/siginSchema";

export async function login(prevState: unknown | null, formData: FormData) {
    console.log(formData.get('email'))
    console.log(formData.get('password'))
    const user: User = {
        email: formData.get("email") as string,
        password: formData.get("password") as string
    }
 
    const result = signInSchema.safeParse(user)
    if(!result.success) {
        return {
            errors: result.error.flatten().fieldErrors
        }
    }
    await signIn(result.data)
    revalidatePath("/")
}