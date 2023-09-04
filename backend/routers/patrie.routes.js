import { Router } from 'express'
import { getAllPatries } from '../controllers/patrie.controller.js'

const patriesRouter = Router()

patriesRouter.get('/', getAllPatries)

export default patriesRouter;