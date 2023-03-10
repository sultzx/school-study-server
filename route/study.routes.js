import express from 'express'
import * as controller from '../controller/index.js'
import * as validation from '../service/validation.js'
import validationHandler from '../service/validationHandler.js'
import checkAuth from '../middleware/checkAuth.js'
const studyRouter = express.Router()

studyRouter.post('/subject', validation.subject, validationHandler, controller.subject.create)
studyRouter.post('/exam', validation.exam, validationHandler, controller.exam.create)
studyRouter.post('/classroom', checkAuth, controller.classroom.create)
studyRouter.delete('/classroom/:id', checkAuth, controller.classroom.remove)
studyRouter.get('/classroom/all', checkAuth, controller.classroom.all)
studyRouter.post('/send-message', checkAuth, controller.question.sendQuestion)
studyRouter.get('/all-questions',checkAuth, controller.question.getAllQuestions)
studyRouter.patch('/answer-for-question', checkAuth, controller.question.answerForQuestion)

studyRouter.post('/create-chapter', checkAuth, controller.lesson.createChapter)
studyRouter.get('/all-chapters', checkAuth, controller.lesson.allChapters)

studyRouter.post('/create-lesson', checkAuth, controller.lesson.createLesson )
studyRouter.get('/all-lessons', checkAuth, controller.lesson.allLessons)


export default studyRouter