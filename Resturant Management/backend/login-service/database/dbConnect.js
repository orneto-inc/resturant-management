import mongoose from "mongoose";
import userModel from "../model/dbModel.js";
import dotenv from 'dotenv';

// config
dotenv.config({ path:"../login-service/devConfig.env"})

function connectDB(){
    mongoose.connect(process.env.MONGODB_URL)
} 
const user = userModel.create({
    firstName: "Binod",
    lastName: "Mehra",
    email: "mehrabinod@gmail.com"
}).then(res=>{
    console.log(res);
});


export default connectDB;

