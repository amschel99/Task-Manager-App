const errorHandler= (err, req, res, next)=>{
    return res.status(500).send(`oops! sorry but an error occured ${err}`)
}
module.exports= errorHandler