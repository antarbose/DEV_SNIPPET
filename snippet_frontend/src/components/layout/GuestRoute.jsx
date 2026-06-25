import { useEffect, useState } from "react"

import { Navigate } from "react-router-dom"

import { checkAuth } from "@/api/user.api.js";

function GuestRoute({ children }) {

    const [authenticated, setAuthenticated] = useState(null)

    useEffect(() => {

        async function verify() {

            try {

                const response = await checkAuth()

                if (
                    response.data.message === "Authenticated"
                ) {

                    setAuthenticated(true)

                }

                else {

                    setAuthenticated(false)

                }

            }

            catch {

                setAuthenticated(false)

            }

        }

        verify()

    }, [])

    if (authenticated === null) {

        return <h1>Loading...</h1>

    }

    if (authenticated === true) {

        return <Navigate to="/dashboard" />

    }

    return children

}

export default GuestRoute