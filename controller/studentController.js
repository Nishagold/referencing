const studentModel = require("../model/studentModel")
const schoolModel =require("../model/schoolModel")
exports.createStudent= async(req,res)=>{
    try {

             const id = req.params.id
             //this is to find the  school by id new student are going to
           const school= await schoolModel.findById(id)
//another way to create in mongoose
        const createStudent = new studentModel(req.body)

        createStudent.school =school
//push is to add into array
await createStudent.save()
        school.StudentInfo.push(createStudent)
        


        await school.save()

        res.status(200).json({message:`new student successfully created `,data:createStudent})

        
        
    } catch (error) {
        res.status(500).json(error.message)
    }
}