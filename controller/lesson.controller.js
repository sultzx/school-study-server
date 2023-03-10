import Lesson from '../model/Lesson.js'
import Chapter from '../model/Chapter.js'

export const createLesson = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

export const allLessons = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

export const createChapter = async (req, res) => {
    try {

        const {name , img} = req.body

        const document = new Chapter({
            name,
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