//for the time being this is just a test controller to check whether my middleware is working or not....


const getProfile= (req,res)=>{
    res.status(200).json({
        message : "User is authorized",
        user : req.user
    })
}

export default getProfile