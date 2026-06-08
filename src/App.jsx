import Layout from "./components/layout/Layout.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import { useState } from "react"

function App(){
const [Selectedlanguage,setSelectedlanguage]=useState("All")
const [Searchcontent, setSearchcontent]=useState("")
const [Selectedsnippet,setSelectedsnippet]=useState(null)
const [Favourites,setFavourites]=useState(false)

return(

<Layout 
  Selectedlanguage={Selectedlanguage}
  setSelectedlanguage={setSelectedlanguage}
  Searchcontent={Searchcontent}
  setSearchcontent={setSearchcontent}
  
  setFavourites={setFavourites}
>
   
<Dashboard
  Selectedlanguage={Selectedlanguage}
  Searchcontent={Searchcontent}
  Selectedsnippet={Selectedsnippet}
  setSelectedsnippet={setSelectedsnippet}
  Favourites={Favourites}
  setFavourites={setFavourites}
  />

</Layout>

)

}

export default App