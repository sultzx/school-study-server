import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: String,
    img: String
})

export default mongoose.model('Chapter', schema)