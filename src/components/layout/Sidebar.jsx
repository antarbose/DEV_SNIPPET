function Sidebar({
    Selectedlanguage,
    setSelectedlanguage,
    setFavourites
}){
    const languages=[
          "typescript",
          "javascript",
          "sql",
          "rust",
          "bash",
          "python"
          ]
    const tags=[
          "#arrays",
          "#cleanup",
          "#database"
          ]
    return (
        <div className="flex flex-col w-64 h-screen bg-black text-white gap-8 p-5 overflow-y-auto">
            <h2 className="text-xl">Snippets</h2>
            <div className="flex flex-col gap-3 w-full bg-black">
                <div className="w-full cursor-pointer" onClick={()=>{setFavourites(false)     //this is done so that whenever user clicks all or any language the language filter appears
                                                                     setSelectedlanguage("All")}}>All</div> 
                <div className="w-full cursor-pointer" onClick={()=> setFavourites(true)}>Favourites</div>
                
            </div>
            <div>
                <h4 className="mb-2">Languages</h4>
                <ul className="flex flex-col gap-2">
                 {languages.map((lang)=>(
                    <li key={lang} className="px-3 cursor-pointer" onClick={()=>{setFavourites(false)
                                                                                 setSelectedlanguage(lang)}}>{lang}</li>
                  )
                )
                 }
                </ul>
            </div>
            <div>
                <h4 className="mb-2"> Tags</h4>
                <ul className=" flex flex-col gap-2">
                 {tags.map((tag)=>(
                    <li key={tag} className="px-3 ">{tag}</li>
                 )
                )
                 }
                </ul>
            </div>
            <div>
                <button className="p-3 rounded bg-yellow-600">+New Snippet</button>
            </div>
        </div>
    )
}
export default Sidebar