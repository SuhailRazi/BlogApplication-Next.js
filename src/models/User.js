import mongoose from "mongoose";

const { Schema } = mongoose;

// Check if the model already exists to avoid recompilation
const User = mongoose.models.User || mongoose.model("User" ,new Schema({
        name: {
            type: String,
            unique:true,
            required: true
        },
        email:{
            type: String,
            unique: true,
            required: true
        },
        password: {
            type:String,
            required: true
        },
    },
    { timestamps: true }
    ))

export default User;