import express from 'express'
import * as controller from '../controller/index.js'
import * as validation from '../service/validation.js'
import validationHandler from '../service/validationHandler.js'
import checkAuth from '../middleware/checkAuth.js'
const studyRouter = express.Router()

studyRouter.post('/subject', validation.subject, validationHandler, controller.subject.create)
studyRouter.post('/exam', validation.exam, validationHandler, controller.exam.create)
studyRouter.post('/classroom', checkAuth, controller.classroom.create)

export default studyRouter