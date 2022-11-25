const express = require("express")
const dotenv = require("dotenv")
const connectDB = require("./config/db")

dotenv.config()

connectDB() 
const app = express()

app.listen(process.env.PORT||5000, ()=>console.log("server is running"))