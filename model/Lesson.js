import mongoose from "mongoose";

const schema = new mongoose.Schema({
    chapter: String,
    title: String,
    text: String,
    img: String,
    subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject'
    }
})

export default mongoose.model('Lesson', schema)