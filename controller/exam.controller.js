
import Exam from "../model/Exam.js";

export const create =  async (req, res) => {
    try {
        const { title, subject, questions, img } = req.body

        const document = new Exam({
            title: title,
            subject: subject,
            questions,
            img
        })

        const exam = await document.save()

        res.status(200).json(exam)

    } catch (error) {
        res.status(500).json(error.message)
    }
}