import mongoose from "mongoose";

const schema = new mongoose.Schema({
    email: {
        type:String,
        required: true,
        unique: true
    },
    hashedPassword: String,
    lastname: String,
    firtname: String,
    patronymic: String,
    phone: String,
    role: String,
    subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject'
    }
}, {timestamps: true})

export default mongoose.model('Employee', schema)
