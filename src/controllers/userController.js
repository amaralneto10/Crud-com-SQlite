import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import bcrypt from 'bcrypt'
import { generateToken, hashPassword } from '../utils/auth.js'

export const getAllUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany()
        res.status(200).json(users)
    } catch (error) {
        console.log(`Erro ao listar usuários: ${error.message}`)
    }
}

export const getAllUsersId = async (req, res) => {
    const { id } = req.params

    try {
        const usersId = await prisma.user.findUnique({
            where: { id: Number(id)}
        })
        res.status(200).json(usersId)
    } catch (error) {
        res.status(400).json({mensagem: `Erro ao verificar usuários por id: ${error.message}`})
    }
}

export const postCreateUsers = async (req, res) => {
    try {
        const { name, email, password } = req.body

        const newUsers = await prisma.user.create({
            data: {
                name,
                email,
                password
            }
    })

    res.status(201).json(newUsers)
    } catch (error) {
        res.status(500).json({mensagem: `Erro ao criar usuário: ${error.message}`})
    }
}

export const updateUser = async (req, res) => {
    const { id } = req.params
    const { name, email, password } = req.body

    try {
        const updateUsuario = await prisma.user.update({
            where: { id: parseInt(id) },
            data: { name, email, password }
        })
        res.status(200).json(updateUsuario)
    } catch (error) {
        res.status(400).json({mensagem: `Erro ao atualizar: ${error.message}`})
    }
}

export const deleteUsers = async (req, res) => {
        const { id } = req.params
    try {
        const deleteUser = await prisma.user.delete({
            where: { id: Number(id) }
        })
        res.status(204)
    } catch (error) {
        res.status(400).json(`Erro em deletar: ${error.message}`)
    }
}

// ROTA PARA REGISTRAR USUÁRIO
export const register = async (req, res) => {
    const { name, email, password } = req.body

    try {
        // Criar senha usuário criptografada
        const hashedPassword = await hashPassword(password)

        // Cria usuário no banco de dados
        const newRegister = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword
            }
        })

        // Gerar um token JWT
        const token = generateToken(newRegister)

        res.status(201).json({
            name: newRegister.name,
            email: newRegister.email,
            token
        })
    } catch (error) {
        res.status(400).json({mensagem: `Erro ao criar usuário: ${error.message}`})
    }
}