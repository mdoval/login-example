'use server'

import { UserSchema } from "@/schema/userSchema";
import { User } from "@/types/User";
import { revalidatePath } from "next/cache";

export async function login(prevState: unknown | null, formData: FormData) {
    console.log(formData.get('email'))
    console.log(formData.get('password'))
    const user: User = {
        email: formData.get("email") as string,
        password: formData.get("password") as string
    }
 
    const result = UserSchema.safeParse(user)
    if(!result.success) {
        return {
            errors: result.error.flatten().fieldErrors
        }
    }
    console.log(result.data)
    revalidatePath("/")
}