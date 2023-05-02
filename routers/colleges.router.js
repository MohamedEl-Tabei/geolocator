const express=require("express")
const router=express.Router()
const controller= require("../controller/colleges.controller")

router.route("/colleges").get(controller.getAllColleges)
router.route("/colleges").post(controller.addCollege)




module.exports=router