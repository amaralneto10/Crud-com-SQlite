import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// export const getAllUsers = (req, res) => {
//     res.status(200).json({mensagem: "Rota GET usuários funcionando!"})
// }

export const getAllUsers = async (req, res) => {
    const { name } = req.body
    const user = await prisma.
    res.status(200).json(name)
}

// export const postCreateUsers = (req, res) => {
//     const { nome, email } = req.body

//     const newUsers = {
//         nome,
//         email
//     }

//     res.status(201).json(newUsers)
// }

export const postCreateUsers = async (req, res) => {
    try {
        const { name, email } = req.body

    const newUsers = await prisma.user.create({
        data: {
            name,
            email
        }
    })

    res.status(201).json(newUsers)
    } catch (error) {
        res.status(500).json({mensagem: `Erro ao criar usuário: ${error.message}`})
    }
}