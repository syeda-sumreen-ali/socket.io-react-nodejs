const express = require("express")
const dotenv = require("dotenv")
const connectDB = require("./config/db")
const Router= require("./route/index")
const cors = require("cors")
dotenv.config()

connectDB() 
const app = express()

app.use(express.json())
app.use(cors())

Router(app)


app.listen(process.env.PORT||5000, ()=>console.log("server is running"))