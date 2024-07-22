const router = require ("express").Router()
const {createSchool,getASchool}=require("../controller/schoolController")
const{createStudent}=require("../controller/studentController")

router.post("/createSchool",createSchool)

router.get("/getone/:id",getASchool)
router.post("/createstudent/:id",createStudent)

module.exports=router