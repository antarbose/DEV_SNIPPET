import Layout from "./components/layout/Layout.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import { useState } from "react"
import Login from "./pages/Login.jsx"
import Signup from "./pages/Signup.jsx"
import {BrowserRouter , Routes, Route } from "react-router-dom"


function App(){
const [Selectedlanguage,setSelectedlanguage]=useState("All")
const [Searchcontent, setSearchcontent]=useState("")
const [Selectedsnippet,setSelectedsnippet]=useState(null)
const [Favourites,setFavourites]=useState(false)
const [ShowCreateModal, setShowCreateModal]=useState(false)

return(
<BrowserRouter>
<Routes>
<Route
path="/"
element={
<Layout 
  Selectedlanguage={Selectedlanguage}
  setSelectedlanguage={setSelectedlanguage}
  Searchcontent={Searchcontent}
  setSearchcontent={setSearchcontent}
  setFavourites={setFavourites}
  setShowCreateModal={setShowCreateModal}
>
   
<Dashboard
  Selectedlanguage={Selectedlanguage}
  Searchcontent={Searchcontent}
  Selectedsnippet={Selectedsnippet}
  setSelectedsnippet={setSelectedsnippet}
  Favourites={Favourites}
  setFavourites={setFavourites}
  ShowCreateModal={ShowCreateModal}
  setShowCreateModal={setShowCreateModal}
  />

</Layout>
}
/>

<Route 
path="/signup"
element={<Signup/>}
/>

<Route 
path="/login"
element={<Login/>}
/>

</Routes>
</BrowserRouter>



)

}

export default App