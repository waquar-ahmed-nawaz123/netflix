import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName :{
        type: String,
        require: true
    },
   email: {
    type: String,
    require: true
    },
    password:{
        type: password,
        require: true
    }
},{timestamps:true});

export const user = mongoose.model("user",userSchema);