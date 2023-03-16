import Lesson from '../model/Lesson.js'
import Chapter from '../model/Chapter.js'

export const createLesson = async (req, res) => {
    try {
        const { chapter, title, text, img, subject, clss, teacher } = req.body

        const document = new Lesson({
            chapter,
            title,
            text,
            img,
            subject,
            clss,
            teacher
        })

        const lesson = await document.save()

        res.status(200).json(lesson)

    } catch (error) {
        res.status(500).json(error.message)
    }
}

export const allLessons = async (req, res) => {
    try {
        const lessons = await Lesson.find()
        .populate('chapter')
        .populate('subject')
        .populate('teacher').exec()

        res.status(200).json(lessons)

    } catch (error) {
        
        res.status(500).json(error.message)

    }
}

export const createChapter = async (req, res) => {
    try {

        const {name, clss, img} = req.body

        const document = new Chapter({
            name,
            class: clss,
            img
        })

        const chapter = await document.save()

        res.status(200).json(chapter)

    } catch (error) {
        
        res.status(500).json(error.message)

    }
}

export const allChapters = async (req, res) => {
    try {
        const chapters = await Chapter.find()
        res.status(200).json(chapters)
    } catch (error) {
        res.status(500).json(error.message)
    }
}