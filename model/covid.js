var mongoose=require("mongoose")
const patientSchema= new mongoose.Schema(
    {
        name:{type:String},
        address:{type:String},
        dateofbirth:{type:String},
        symptoms:{type:String},
        phone:{type:Number},
        email:{type:String},
        patientcode:{type:Number}
    }
)
var patientModel= mongoose.model("patients", patientSchema)
module.exports={patientModel}