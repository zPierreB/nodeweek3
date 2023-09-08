import mongoose from "mongoose";
const { Schema, model } = mongoose;

const resultSchema = new Schema({
    name: String,
    amount: Number,
    order: Number
}, { timestamps: true })

const Result = model('results', resultSchema)

export default Result;