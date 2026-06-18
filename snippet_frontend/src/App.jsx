import Layout from "./components/layout/Layout.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import { useState } from "react"

function App(){
const [Selectedlanguage,setSelectedlanguage]=useState("All")
const [Searchcontent, setSearchcontent]=useState("")
const [Selectedsnippet,setSelectedsnippet]=useState(null)
const [Favourites,setFavourites]=useState(false)
const [ShowCreateModal, setShowCreateModal]=useState(false)

return(

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

)

}

export default App