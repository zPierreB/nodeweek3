import { Router } from 'express'
import { getAllPatries, updatePatryById } from '../controllers/patrie.controller.js'
import { isAuth } from '../controllers/user.controller.js'

const patriesRouter = Router()

patriesRouter.get('/', getAllPatries)
patriesRouter.put("/:id", updatePatryById)

export default patriesRouter;