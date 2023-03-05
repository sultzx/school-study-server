import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: String,
    img: String,
    lessons: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lesson'
    }]
}, {timestamps: true})

export default mongoose.model('Subject', schema)