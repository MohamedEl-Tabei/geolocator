const express= require("express")
const cors=require("cors")
const app=express()
const collegeRouters=require("./routers/colleges.router")
app.use(cors())
app.use(express.json())
app.use(collegeRouters)


module.exports=app