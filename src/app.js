import express from 'express'
import userRoutes from './routes/userRoutes.js'
import productRoutes from './routes/productRoutes.js'
const app = express()

// Permite que o express entenda JSON no corpo da requisição
app.use(express.json())

// Rota de usuários
app.use('/usuarios', userRoutes)
app.use('/produtos', productRoutes)

export default app