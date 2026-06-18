import dotenv from "dotenv"
dotenv.config()
import connectDB from "./db/connectDB.js"
import app from "./app.js"

const PORT = process.env.PORT || 8000
connectDB()

console.log(process.env.PORT)

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})