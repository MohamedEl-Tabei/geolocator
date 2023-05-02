const mongoose= require("mongoose")
const app= require("./express")
const config=require("./config/config")
const port=config.Port
const mongoUri=config.MongoUri

app.get("/",(req,res)=>res.send("Hi"))
mongoose.connect(mongoUri).then(()=>{app.listen(port,()=>{console.log(`Listen at port ${port}`)})})

