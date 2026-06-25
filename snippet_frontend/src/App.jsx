import Layout from "./components/layout/Layout.jsx"
import Dashboard from "./pages/Dashboard.jsx"

import Login from "./pages/Login.jsx"
import Signup from "./pages/Signup.jsx"

import ProtectedRoute from "./components/ProtectedRoute.jsx"
import GuestRoute from "./components/layout/GuestRoute.jsx"

import { useState } from "react"

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
}
  from "react-router-dom"


function App() {

  const [
    Selectedlanguage,
    setSelectedlanguage

  ] = useState("All")

  const [
    Searchcontent,
    setSearchcontent

  ] = useState("")

  const [
    Selectedsnippet,
    setSelectedsnippet

  ] = useState(null)

  const [
    Favourites,
    setFavourites

  ] = useState(false)

  const [
    ShowCreateModal,
    setShowCreateModal

  ] = useState(false)


  return (

    <BrowserRouter>

      <Routes>


        <Route

          path="/"

          element={

            <Navigate
              to="/login"
            />

          }

        />


        <Route

          path="/login"

          element={
            <GuestRoute>
              <Login />
            </GuestRoute>
          }

        />


        <Route

          path="/signup"

          element={
            <GuestRoute>
              <Signup/>
            </GuestRoute>
          }

        />


        <Route

          path="/dashboard"

          element={

            <ProtectedRoute>

              <Layout

                Selectedlanguage={
                  Selectedlanguage
                }

                setSelectedlanguage={
                  setSelectedlanguage
                }

                Searchcontent={
                  Searchcontent
                }

                setSearchcontent={
                  setSearchcontent
                }

                setFavourites={
                  setFavourites
                }

                setShowCreateModal={
                  setShowCreateModal
                }

              >

                <Dashboard

                  Selectedlanguage={
                    Selectedlanguage
                  }

                  Searchcontent={
                    Searchcontent
                  }

                  Selectedsnippet={
                    Selectedsnippet
                  }

                  setSelectedsnippet={
                    setSelectedsnippet
                  }

                  Favourites={
                    Favourites
                  }

                  setFavourites={
                    setFavourites
                  }

                  ShowCreateModal={
                    ShowCreateModal
                  }

                  setShowCreateModal={
                    setShowCreateModal
                  }

                />

              </Layout>

            </ProtectedRoute>

          }

        />


      </Routes>

    </BrowserRouter>

  )

}

export default App