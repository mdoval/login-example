import { z } from 'zod'

export const UserSchema = z.object({
    email: z.string().email({message: "Debe colocar un email valido"}),
    password: z.string().min(8,{message: "La contraseña debe tener al menos 8 caracteres"}).max(20, {message: "La contraseña debe tener un maximo de 20 caracteres"})
})