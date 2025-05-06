import express from 'express'
import { getAllUsers, postCreateUsers, deleteUsers, updateUser, getAllUsersId } from '../controllers/userController.js'
import { validate } from '../middleware/validate.js'
import { createUserSchema } from '../schemas/userSchemas.js'

const router = express.Router()

router.get('/', getAllUsers)

router.post('/', validate(createUserSchema), postCreateUsers )

router.put('/:id', updateUser)

router.delete('/:id', deleteUsers)

router.get('/:id', getAllUsersId)

export default router