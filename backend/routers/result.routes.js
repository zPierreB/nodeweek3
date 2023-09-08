import { Router } from 'express'
import { getAllResults, createResult } from '../controllers/results.controller.js'
import { isAuth } from '../controllers/user.controller.js'

const resultRouter = Router()

resultRouter.get('/', getAllResults)
resultRouter.post('/', createResult)

export default resultRouter