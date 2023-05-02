const collegeSchema={
    Name:{
        type:String,
        unique:true
    },
    Location:{
        type:{
            type:String,
            enum:["Point"],
           // required:true
        },
        coordinates:{
            type:[Number],
            index:"2dsphere",
           // required:true
        }
    },
    Time:{
        created:{
            type:Date,
            default:Date.now()
        },
        updated:{
            type:Date
        }

    }
}
const mongoose=require("mongoose")
const CollegeSchema=new mongoose.Schema(collegeSchema)






module.exports=mongoose.model("Colleges",CollegeSchema)