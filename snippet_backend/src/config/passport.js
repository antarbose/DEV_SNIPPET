import passport from "passport"

import {
    Strategy as GoogleStrategy
}
    from "passport-google-oauth20"

import User from "../models/user.model.js"


console.log(
  "CLIENT ID:",
  process.env.GOOGLE_CLIENT_ID
)

console.log(
  "CLIENT SECRET:",
  process.env.GOOGLE_CLIENT_SECRET
)

passport.use(

    new GoogleStrategy(

        {

            clientID:
                process.env.GOOGLE_CLIENT_ID,

            clientSecret:
                process.env.GOOGLE_CLIENT_SECRET,

            callbackURL:
                "/api/auth/google/callback"

        },

        async (

            accessToken,

            refreshToken,

            profile,

            done

        ) => {

            try {

                let user =

                    await User.findOne({

                        email:
                            profile.emails[0].value

                    })

                if (!user) {

                    user =

                        await User.create({

                            username:
                                profile.displayName,

                            email:
                                profile.emails[0].value,

                            authProvider:
                                "google"

                        })

                }

                done(
                    null,
                    user
                )

            }

            catch (error) {

                done(
                    error,
                    null
                )

            }

        }

    )

)

export default passport