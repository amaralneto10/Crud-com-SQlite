import express from 'express'
import { getAllUsers, postCreateUsers, deleteUsers, updateUser, getAllUsersId } from '../controllers/userController.js'

const router = express.Router()

router.get('/', getAllUsers)

router.post('/',postCreateUsers )

router.put('/:id', updateUser)

router.delete('/:id', deleteUsers)

router.get('/:id', getAllUsersId)

export default router