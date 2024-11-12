import { z } from 'zod'

export const signInSchema = z.object({
    email: z.string({ required_error: "Email es requerido" })
      .min(1, "Email es requerido")
      .email("Email Invalido"),
    password: z.string({ required_error: "Password es requerido" })
      .min(1, "Password es requerido")
      .min(8, "Password debe tener al menos 8 caracteres")
      .max(32, "Password debe tener maximo de 32 caracteres"),
  })