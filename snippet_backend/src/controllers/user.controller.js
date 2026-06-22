//for the time being this is just a test controller to check whether my middleware is working or not....


const getProfile= (req,res)=>{

res.status(200).json({

message:"Authenticated"

})

}

export default getProfile