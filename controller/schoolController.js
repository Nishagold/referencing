const schoolModel=require('../model/schoolModel')
exports.createSchool=async(req,res)=>{

    try {
       // const{schoolName,schoolAddress,SchoolEmail}=req.body
     const createSchool =  await schoolModel.create(req.body)
     res.status(200)
     res.json({
        message:`school${createSchool.schoolName}has been created`,
        data:createSchool
     })
        
    } catch (error) {
        res.status(500).json(error.message)
    }
}
exports.getASchool=async(req,res)=>{
    try {
        const oneSchool= await schoolModel.findById(req.params.id).populate("StudentInfo")
        res.status(200).json({message:`kindly find the school with the above id below`,data:oneSchool})

    } catch (error) {
        res.status(500).json(error.message)
    }
}


