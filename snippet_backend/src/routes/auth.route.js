import express from "express"
import  {registerUser , loginUser , logout}  from "../controllers/auth.controller.js"
import passport from "passport"
import jwt from "jsonwebtoken"
const router= express.Router()

router.post("/register", registerUser)
router.post("/login", loginUser)
router.post("/logout" , logout)

// router for google authentication
router.get(

    "/google",

    passport.authenticate(

        "google",

        {

            scope: [

                "profile",

                "email"

            ],

           prompt: "select_account"

        }

    )

)


router.get(

    "/google/callback",

    passport.authenticate(

        "google",

        {

            session: false

        }

    ),

    async (

        req,

        res

    ) => {

        const token =

            jwt.sign(

                {

                    id:
                        req.user._id

                },

                process.env.JWT_SECRET,

                {

                    expiresIn:
                        "7d"

                }

            )

        res.cookie(

            "token",

            token,

            {

                httpOnly: true,

                secure: false

            }

        )

        res.redirect(

            "http://localhost:5173/dashboard"

        )

    }

)



export default router
