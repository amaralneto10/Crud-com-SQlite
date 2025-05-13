import express from 'express'
import { getAllUsers, postCreateUsers, deleteUsers, updateUser, getAllUsersId, register, login } from '../controllers/userController.js'
import { validate } from '../middleware/validate.js'
import { createUserSchema, loginSchema, updateUserSchema } from '../schemas/userSchemas.js'
import { authenticate } from '../middleware/authentication.js'

const router = express.Router()

router.get('/', getAllUsers)

router.post('/', validate(createUserSchema), postCreateUsers )

router.put('/:id', authenticate, validate(updateUserSchema), updateUser)

router.delete('/:id', authenticate, deleteUsers)

router.get('/:id', getAllUsersId)

router.post('/register', register)

router.post('/login', validate(loginSchema), login)

export default router