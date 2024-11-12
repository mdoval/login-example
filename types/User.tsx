import { UserSchema } from "@/schema/userSchema";
import { z } from 'zod'

export type User = z.infer<typeof UserSchema>