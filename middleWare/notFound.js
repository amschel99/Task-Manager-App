const notFound= (req, res)=>{
return res.status(404).send("Resource not found")
}
module.exports= notFound