import express from 'express'
import * as controller from '../controller/index.js'
import * as validation from '../service/validation.js'
import validationHandler from '../service/validationHandler.js'
import checkAuth from '../middleware/checkAuth.js'

const userRouter =  express.Router()

userRouter.post('/student/auth/registration', validation.registration, validationHandler, controller.student.registration)
userRouter.post('/student/auth/login', validation.login, validationHandler, controller.student.login)
userRouter.get('/student/me', checkAuth, controller.student.me)

userRouter.post('/employee/auth/registration', validation.registration, validationHandler, controller.employee.registration)
userRouter.post('/employee/auth/login', validation.login, validationHandler, controller.employee.login)
userRouter.get('/employee/me', checkAuth, controller.employee.me)



export default userRouter