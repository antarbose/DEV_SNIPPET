//this route takes us to the user profile...which is now a protected route
import express from "express"
import protectRoute from "../middlewares/auth.middleware.js"
import getProfile from "../controllers/user.controller.js"

const router= express.Router()

router.get("/check",protectRoute,getProfile)

export default router