import { Router } from 'express'
import { getUserByUsername, logout } from '../controllers/user.controller.js'

const userRouter = Router()

userRouter.post('/', getUserByUsername)
userRouter.get('/logout', logout)

export default userRouter