import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import authRouter from "./routes/auth.route.js"
import userRouter from "./routes/user.route.js"
import passport from "./config/passport.js"
const app=express()
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type"]
  })
)
app.use(express.json())
app.use(cookieParser())
app.use(
    passport.initialize()
)


app.use("/api/auth", authRouter)
app.use("/api/user",userRouter)

export default app