import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const saltRounds = 10
const JWT_SECRET = process.env.JWT_SECRET

export async function hashPassword(password) {
    return await bcrypt.hash(password, saltRounds)
}

export const generateToken = (user) => {
    return jwt.sign(
        {id: user.id, email: user.email},
        JWT_SECRET,
        {expiresIn: "1h"}
        )
}

export const comparePassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword)
}

export const verifyToken = (token) => {
    return jwt.verify(token, JWT_SECRET)
}