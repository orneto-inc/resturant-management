import express from "express";
import connectDB  from "./database/dbConnect.js";
import dotenv from "dotenv";
import { getAllUsers } from "./controller/controller.js";

// Express App Initialisation 
const app = express();

// Middlewares
app.use(express.json());
connectDB();

// config
dotenv.config({ path:"../login-service/devConfig.env"})


// Get Request
app.get("/", (req, res) => {
  res.status(201).json("First Get Request");
});


// API Routes
app.use("/api/v1 ")

// HTTP Server Initialization
app.listen(process.env.PORT, (err) => { 
  if (err) {
    console.log(err);
  } else {
    console.log(`Server is running on http:/localhost:${process.env.PORT}`);
  }
});
