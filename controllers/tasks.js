
const Tasks= require("../models/Task")
const asyncWrapper= require("../middleWare/async")

const getAllTasks= asyncWrapper( async (req, res)=>{
    //Tasks.find({}) gets all the document in the specified collection 
    
const tasks= await Tasks.find({})
res.status(200).json({tasks})

})
const getSingleTask= asyncWrapper( async (req, res)=>{
    
const {id:taskId}=req.params
const task= await Tasks.findOne({_id:taskId})


if(task===undefined || task===null){
  
    return  res.status(404).send("The task was not found")
    
}
res.status(200).send({task})
    
 
})
const createTask= asyncWrapper( async (req, res)=>{
    
  const task= await Tasks.create(req.body)
  
  res.status(201).json({task})
    
  
})
const updateTask= asyncWrapper( async (req, res)=>{
     
const {id:taskId}=req.params
const task= await Tasks.findOneAndUpdate({_id:taskId}, req.body,{
    new:true,
    runValidators:true
})


if(!task){
  
    return  res.status(404).send("The task was not found")
    
}
res.status(200).json({task})
    
   
})
const deleteTask= asyncWrapper( async (req, res)=>{
  
const {id:taskId}=req.params
const task= await Tasks.findOneAndDelete({_id:taskId})


if(!task){
  
    return  res.status(404).send("The task was not found")
    
}
res.status(200).send({task})
    
})
module.exports={

    getAllTasks, getSingleTask, createTask, updateTask, deleteTask
}