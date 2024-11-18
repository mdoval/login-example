"use server";

import { User } from "@/types/User";
import { signIn } from "@/auth";
import { registerSchema, loginSchema } from "@/schema/authSchema";
import { AuthError } from "next-auth";
import { db } from "./db";
import bcrypt from 'bcryptjs'
import { redirect } from "next/navigation";

export async function login(prevState: unknown | null, formData: FormData) {
  try {
    const user: User = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    const result = loginSchema.safeParse(user);
    if (!result.success) {
      return {
        errors: result.error.flatten().fieldErrors,
      };
    }
    await signIn("credentials", { ...result.data, ...{ redirect: false } });
    //return { success: true }
    //redirect('/dashboard')
  } catch (error) {
    if(error instanceof AuthError) {
      return { error: error.cause?.err?.message }      
    }
    return { error: "Error 500" }
  }
  //redirect('/dashboard')
}

export async function register(prevState: unknown | null, formData: FormData) {
  try {
    const values: {name: string, email: string, password: string} = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    // Verificar datos correctos
    const result = registerSchema.safeParse(values);
    if (!result.success) {
      return {
        errors: result.error.flatten().fieldErrors,
      };
    }

    // Verificar si usuario ya existe
    const user = await db.user.findUnique({
      where: {
        email: result.data.email
      }
    })
    
    if(user) {
      return {
        error: "Usuario ya existe"
      }
    }

    // Hash de Contraseña
    const passwordHash = await bcrypt.hash(values.password,10)

    // Crear Usuario
    const newUser = await db.user.create({data: {
      name: result.data.name,
      email: result.data.email,
      password: passwordHash
    }})
    //return { success: true, data: newUser }
  } catch (error) {
    console.log(error)
    return { error: "Error 500" }
  }  
  redirect('/login')
}