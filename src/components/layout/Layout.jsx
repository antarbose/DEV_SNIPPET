import Sidebar from "./Sidebar.jsx"
import Header from "./Header.jsx"

function Layout({Selectedlanguage,setSelectedlanguage,Searchcontent,setSearchcontent,children,setFavourites}){
    return(
        <div className="h-screen flex">
            <Sidebar
              Selectedlanguage={Selectedlanguage}
              setSelectedlanguage={setSelectedlanguage}
            
              setFavourites={setFavourites}
              />
            <div className="flex-1 bg-[#0A0A0A] h-screen overflow-y-auto">
                <Header
                  Searchcontent={Searchcontent}
                  setSearchcontent={setSearchcontent}
                  setFavourites={setFavourites}
                  />
                {children}
            </div>
        </div>
    )

}
export default Layout