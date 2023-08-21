import { Schema, model } from "mongoose";

const userSchema = new Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
    },
    email:{
        type: String,
        required: true,
        unique: true
    }
});

const userModel = model("userDetail", userSchema)
export default userModel;

