const College=require("../models/colleges.model")
const getAllColleges=async(req,res)=>{
    try {
        const colleges= await College.find()
        res.status(200).json(colleges)
    } catch (error) {
        console.log(error)
        res.status(400).json({err:"error server"})
    }
}
const addCollege=async(req,res)=>{
    try {
        const college= await College.create(req.body)
        res.status(200).json({message:`${college.Name} is add`})
    } catch (error) {
        console.log(error)
        res.status(400).json({err:"error server"})
    }
}


module.exports={getAllColleges,addCollege}