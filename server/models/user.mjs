import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email:{
        type: mongoose.Schema.Types.String,
        required: true,
        unique: true
    },
    password:{
        type: mongoose.Schema.Types.String,
        required: true
    },
    fullname:{
        type: mongoose.Schema.Types.String,
        required: true
    },
    image:{
        type: mongoose.Schema.Types.String,
        required: true
    }
},
{
    timestamps: true
})

export const User = mongoose.model('User', userSchema)