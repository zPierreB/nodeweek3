import mongoose from "mongoose";
const { Schema, model } = mongoose;

const patrieSchema = new Schema({
    name: String,
    number: Number,
    order: Number
}, { collection: "patries" })

const Patrie = model('patries', patrieSchema)

export default Patrie;