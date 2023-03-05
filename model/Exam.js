import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title: String,
    subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject'
    },
    questions: [{
        type: Object,
        name: String,
        text: String,
        img: String,
        answers: [{
            type: Object,
            item: String,
            text: String,
            img: String
        }]
    }],
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher'
    },
    img: String
}, {timestamps: true})

export default mongoose.model('Exam', schema)