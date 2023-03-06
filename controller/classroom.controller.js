import mongoose from 'mongoose'
import Classroom from '../model/Classroom.js'
import Employee from '../model/Employee.js'

export const create = async (req, res) => {

    try {

        const userId = req.userId

        const {title, abcd} = req.body

        const document = new Classroom({
            name: title,
            abcd
        })

        console.log(document)

        const classroom = await document.save()

        const employee = await Employee.findOne({
            _id: userId
        })

        employee.classrooms.push(classroom._id)

        await employee.save()


        res.status(200).json(employee)

    } catch (error) {
        res.status(500).json(error.message)
    }
} 