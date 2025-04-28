import express from 'express'
import userRoutes from './routes/userRoutes.js'
const app = express()

// Permite que o express entenda JSON no corpo da requisição
app.use(express.json())

// Rota de usuários
app.use('/usuarios', userRoutes)

export default app