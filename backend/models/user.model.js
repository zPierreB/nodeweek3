import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
    username: String,
    password: String
}, { collection: "user" })

const User = model('user', userSchema)

export default User;