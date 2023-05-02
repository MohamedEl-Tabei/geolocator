const dotenv= require("dotenv")
dotenv.config({path:"./config/config.env"})

module.exports={
    Port:process.env.PORT||3000,
    MongoUri:process.env.MONGO_URI
}