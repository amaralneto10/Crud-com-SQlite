import { z } from 'zod'

export const createUserSchema = z.object({
    name: z.string().min(3, "O nome deve conter pelo menos 3 caracteres"),
    email: z.string().email("Email invalido"),
    password: z.string().min(6, "A senha deve conter pelo menos 6 caracteres").regex(/[A-Z]/, "A senha deve ter conter menos uma letra maiúscula")
})

export const updateUserSchema = z.object({
    name: z.string().min(3, "O nome deve conter pelo menos 3 caracteres").optional(),
    email: z.string().email("Email invalido").optional(),
    password: z.string().min(6, "A senha deve conter pelo menos 6 caracteres").regex(/[A-Z]/, "A senha deve ter conter menos uma letra maiúscula").optional()
})