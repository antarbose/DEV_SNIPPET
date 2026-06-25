import { Link } from "react-router-dom"
import { Search, Sparkles } from "lucide-react"

import { useState, useEffect } from "react"
import { checkAuth } from "@/api/user.api.js"

import {
    logout
}
    from "../../api/auth.api"

import {
    useNavigate
}
    from "react-router-dom"

function AppHeader({
    Searchcontent,
    setSearchcontent,
    setFavourites
}) {

    const navigate = useNavigate()

    const [authenticated, setAuthenticated] = useState(null) // we use this state so that login signup buttons dont appear once we enter dashboard

    useEffect(() => {

        async function CheckUser() {

            try {

                const response = await checkAuth()
                if (response.data.message === "Authenticated")
                    setAuthenticated(true)
                else
                    setAuthenticated(false)
            }

            catch {

                setAuthenticated(false)

            }
        }

        CheckUser()

    }, [])

    async function handleLogout() {

        try {

            const response =

                await logout()

            alert(
                response.data.message
            )

            navigate(
                "/login"
            )

            setAuthenticated(false)

        }

        catch (error) {

            alert(
                "Logout failed"
            )

        }

    }








    return (

        <header
            className="
            h-24
            flex
            items-center
            justify-between

            px-8

            bg-[#09090b]/80
            backdrop-blur-xl

            border-b
            border-white/10

            text-white
            "
        >


            {/* Title */}

            <div
                className="
                flex
                items-center
                gap-3
                "
            >

                <div
                    className="
                    h-10
                    w-10

                    flex
                    items-center
                    justify-center

                    rounded-xl

                    bg-gradient-to-br
                    from-blue-500
                    to-purple-600

                    shadow-lg
                    shadow-blue-500/20
                    "
                >

                    <Sparkles
                        size={20}
                        className="text-white"
                    />

                </div>


                <div>

                    <h2
                        className="
                        text-lg
                        font-semibold
                        tracking-tight
                        "
                    >
                        All Snippets
                    </h2>


                    <p
                        className="
                        text-xs
                        text-zinc-500
                        "
                    >
                        Your personal code library
                    </p>

                </div>


            </div>





            {/* Search */}

            <div
                className="
                relative
                w-[420px]
                "
            >

                <Search
                    size={18}
                    className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-zinc-500
                    "
                />


                <input

                    type="text"

                    placeholder="Search semantically..."

                    value={Searchcontent}

                    onChange={(e) => {

                        setFavourites(false)

                        setSearchcontent(e.target.value)

                    }}


                    className="
                    w-full
                    h-12

                    rounded-xl

                    bg-white/[0.06]

                    border
                    border-white/10

                    pl-12
                    pr-4

                    text-sm
                    text-white

                    placeholder:text-zinc-500

                    outline-none

                    focus:border-blue-500/50

                    focus:ring-2
                    focus:ring-blue-500/20

                    transition-all

                    font-[Geist]
                    "

                />

            </div>





            {/* Buttons */}


            <div
                className="
    flex
    items-center
    gap-3
    "
            >

                {!authenticated ? (

                    <>

                        <Link to="/login">

                            <button
                                className="
                    h-11
                    px-5
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    text-zinc-300
                    hover:bg-white/10
                    hover:text-white
                    transition-all
                    "
                            >
                                Login
                            </button>

                        </Link>


                        <Link to="/signup">

                            <button
                                className="
                    h-11
                    px-5
                    rounded-xl
                    bg-gradient-to-r
                    from-blue-600
                    to-indigo-600
                    text-white
                    font-medium
                    shadow-lg
                    shadow-blue-500/20
                    hover:from-blue-500
                    hover:to-indigo-500
                    transition-all
                    "
                            >
                                Signup
                            </button>

                        </Link>

                    </>

                ) : (

                    <button
                        onClick={handleLogout}
                        className="
            h-11
            px-5
            rounded-xl
            bg-gradient-to-r
            from-blue-600
            to-indigo-600
            text-white
            font-medium
            shadow-lg
            shadow-blue-500/20
            hover:from-blue-500
            hover:to-indigo-500
            transition-all
            "
                    >
                        Logout
                    </button>

                )}

            </div>







        </header>

    )
}

export default AppHeader