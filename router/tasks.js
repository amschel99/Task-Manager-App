const express= require("express");
const router= express.Router()
const{getAllTasks,getSingleTask, createTask,updateTask,deleteTask}= require('../controllers/tasks')

router.route("/").get(getAllTasks).post(createTask)
router.route("/:id").patch(updateTask).delete(deleteTask).get(getSingleTask)
module.exports=router