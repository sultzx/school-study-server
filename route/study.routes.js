import express from 'express'
import * as controller from '../controller/index.js'
import * as validation from '../service/validation.js'
import validationHandler from '../service/validationHandler.js'

const studyRouter = express.Router()

studyRouter.post('/exam', validation.exam, validationHandler, controller.exam.create)

export default studyRouter