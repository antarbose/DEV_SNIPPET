import User from "../models/user.model.js"
import bcrypt from "bcrypt"

const registerUser = async (req, res) => {

    try {
        console.log("REGISTER HIT")
        console.log(req.body)

        const { username, email, password } = req.body

        if (!username || !email || !password) {
            return res.status(400).json({
                message: "All fields required"
            })
        }

         // for strong authentication.....


        const emailRegex =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;

        if (!emailRegex.test(email)) {
            return res.status(400).json({
                message: "Invalid email"
            });
        }

        if (!passwordRegex.test(password)) {
            return res.status(400).json({
                message:
                    "Password must contain uppercase, lowercase, number and special character and be at least 6 characters."
            });
        }





        const existingUser = await User.findOne({ email })

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            })
        }

        const hashedPassword =
            await bcrypt.hash(password, 10)

        const user =
            await User.create({

                username,
                email,
                password: hashedPassword

            })

        return res.status(201).json({
            message: "User created",
            user
        })

    }

    catch (error) {

        return res.status(500).json({
            message: error.message
        })

    }

}



import jwt from "jsonwebtoken"

const loginUser = async (req, res) => {

    try {

        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({
                message: "All fields required"
            })
        }

        const user = await User.findOne({ email })

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            })
        }


        if (user.authProvider === "google") {

            return res.status(400).json({

                message:
                    "Use Continue with Google"

            })


        }

        const match = await bcrypt.compare(
            password,
            user.password
        )

        if (!match) {
            return res.status(401).json({
                message: "Invalid password"
            })
        }

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d"
            }
        )

        res.cookie(
            "token",
            token,
            {
                httpOnly: true,
                secure: false,
                sameSite: "lax"
            }
        )

        res.status(200).json({
            message: "Login success"
        })

    }

    catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const logout = (req, res) => {

    res.clearCookie(

        "token",

        {

            httpOnly: true,

            secure: false

        }

    )

    res.status(200).json({

        message: "Logout successful"

    })

}




export { registerUser, loginUser, logout }