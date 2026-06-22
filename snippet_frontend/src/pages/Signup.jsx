import { useState } from "react"

import {
    signup
} from "../api/auth.api"

import { Link } from "react-router-dom"


import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "@/components/ui/card"

import { Input } from "@/components/ui/input"

import { Button } from "@/components/ui/button"



function Signup() {


    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")



    async function handleSignup(e) {

        e.preventDefault()

        try {

            const response =
                await signup({

                    username,
                    email,
                    password

                })

            console.log(response.data)

            alert(response.data.message)


        }

        catch (error) {

            console.log(error)
            alert(
                error.response?.data?.message
                ||
                "Signup failed"
            )

        }

    }



    return (

        <div

            className="
min-h-screen

flex

items-center

justify-center

bg-[#09090b]

relative

overflow-hidden

"

        >


            {/* background glow */}

            <div

                className="
absolute

top-0

left-1/2

-translate-x-1/2

h-[450px]

w-[450px]

rounded-full

bg-blue-600/20

blur-[130px]

"

            />




            <Card

                className="
relative

w-[430px]

rounded-3xl

bg-[#111318]/80

backdrop-blur-xl

border

border-white/10

shadow-2xl

"

            >


                <CardHeader

                    className="
text-center

space-y-4

pt-10

"

                >


                    <div

                        className="
mx-auto

flex

h-12

w-12

items-center

justify-center

rounded-2xl

bg-gradient-to-br

from-blue-500

to-purple-600

text-white

font-bold

text-xl

"

                    >

                        &lt;/&gt;

                    </div>




                    <CardTitle

                        className="
text-3xl

font-bold

text-white

tracking-tight

"

                    >

                        Create Account

                    </CardTitle>




                    <p

                        className="
text-zinc-400

text-sm

"

                    >

                        Start saving your snippets

                    </p>


                </CardHeader>





                <CardContent

                    className="
px-10

pb-10

"

                >


                    <form

                        onSubmit={handleSignup}

                        className="
flex

flex-col

gap-5

"

                    >



                        <Input

                            type="text"

                            placeholder="Username"

                            value={username}

                            onChange={(e) => setUsername(e.target.value)}

                            className="
h-12

rounded-xl

bg-white/5

border-white/10

text-white

placeholder:text-zinc-500

focus-visible:ring-blue-500

"

                        />





                        <Input

                            type="email"

                            placeholder="Email"

                            value={email}

                            onChange={(e) => setEmail(e.target.value)}

                            className="
h-12

rounded-xl

bg-white/5

border-white/10

text-white

placeholder:text-zinc-500

focus-visible:ring-blue-500

"

                        />





                        <Input

                            type="password"

                            placeholder="Password"

                            value={password}

                            onChange={(e) => setPassword(e.target.value)}

                            className="
h-12

rounded-xl

bg-white/5

border-white/10

text-white

placeholder:text-zinc-500

focus-visible:ring-blue-500

"

                        />





                        <Button

                            type="submit"

                            className="
h-12

rounded-xl

w-full

bg-gradient-to-r

from-blue-600

to-purple-600

hover:from-blue-500

hover:to-purple-500

font-semibold

shadow-lg

shadow-blue-500/20

"

                        >

                            Create Account

                        </Button>



                    </form>





                    <p

                        className="
mt-6

text-center

text-sm

text-zinc-400

"

                    >

                        Already have an account?


                        <Link

                            to="/login"

                            className="
ml-2

text-blue-400

hover:text-blue-300

font-medium

"

                        >

                            Login

                        </Link>


                    </p>




                </CardContent>


            </Card>



        </div>


    )

}


export default Signup