import { z } from 'zod'

export const createProductSchema = z.object({
    name: z.string().min(3, "O nome deve conter pelo menos 3 caracteres."),
    description: z.string().optional(),
    price: z.number().gt(0, 'O preço deve ser maior que zero.'),
    stock: z.number().min(0, 'O estoque não pode ser negativo.')
})