const express= require('express')
require("dotenv").config()
const app= express()
const port= 3000;
const notFound=require("./middleWare/notFound")
const error= require("./middleWare/error")
const tasks= require("./router/tasks")
const config=require("./db/config")
app.use(express.static("./public"))
app.use(express.json())
app.use('/api/tasks', tasks)
app.use(notFound)
app.use(error)


const start= async ()=>{
    try{
        await config(process.env.MONGO_URI)
        app.listen(port, ()=>{
    console.log(`server running on${port}`)
})
    }catch(error){
        console.error(error)

    }
}
start()

