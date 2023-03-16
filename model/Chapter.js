import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: String,
    class: String,
    img: String
})

export default mongoose.model('Chapter', schema)