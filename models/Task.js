//here we are creting the schemas for our database with the help of mongoose
const mongoose= require("mongoose")

const taskSchema= new mongoose.Schema(

    {
        name:{
type:String,
required:[true, "name cannot be empty"],
trim:true,
maxLength:[20, "cannot be more than 20 characters"]
        },
         completed:{
             type:Boolean,
             default:false
         }
    }
)
//The below line of code is similar to  creating a collection called Tasks which has the schema taskSchema
//we then have to use this model in our controllers
module.exports=mongoose.model("Tasks", taskSchema)