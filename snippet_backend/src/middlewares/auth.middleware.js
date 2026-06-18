// This middleware is used to check authentication of user before he/she wants to access the protected services of the site....
import jwt from "jsonwebtoken"

const protectRoute = (req,res,next)=>{

try{

const token=req.cookies.token

if(!token){
return res.status(401).json({
message:"Unauthorized"
})
}

const decoded=jwt.verify(
token,
process.env.JWT_SECRET
)

req.user=decoded

next()

}

catch(error){

return res.status(401).json({
message:"Invalid token"
})

}

}

export default protectRoute