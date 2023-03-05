import Subject from "../model/Subject.js";

export const create = (req, res) => {
    try {
        const { name } = req.body

        const document = new Subject({
            name,
            lessons
        })
    } catch (error) {
        res.status(200).json(error.message)
    }
}