import {
    useEffect,
    useState
}
    from "react"

import {
    Navigate
}
    from "react-router-dom"

import {
    checkAuth
}
    from "../api/user.api"

function ProtectedRoute({

    children

}) {
    const [
        authenticated,

        setAuthenticated

    ] = useState(null)


    useEffect(() => {

        async function verify() {

            try {

                const response =
                    await checkAuth()

                console.log(
                    "CHECK AUTH:",
                    response.data
                )


                if (
                    response.data.message
                    ===
                    "Authenticated"
                ) {

                    setAuthenticated(
                        true
                    )

                }

                else {

                    setAuthenticated(
                        false
                    )

                }

            }

            catch (error) {
                console.log(
                    "AUTH ERROR:",
                    error.response?.data
                )
                setAuthenticated(
                    false
                )

            }
        }
        verify()
    }, [])


    if (
        authenticated === null
    ) {

        return (

            <h1>
                Loading...
            </h1>

        )

    }




    if (
        authenticated == false
    ) {

        return (
            <Navigate
                to="/login"
            />
        )

    }

    return children

}

export default ProtectedRoute