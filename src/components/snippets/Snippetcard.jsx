function Snippetcard({snippet,Selectedsnippet,setSelectedsnippet,togglefavourites}){
    return(
        <div className="text-white border border-gray-800 bg-[#10141A] rounded-xl h-70 flex flex-col gap-2 p-3 self-start cursor-pointer" onClick={()=>setSelectedsnippet(snippet)}>
            <h3 className="text-blue-400  text-sm mb-3">{snippet.language}</h3>
            <h2 className="text-xl font-bold mb-2">{snippet.title}</h2>
            <div className="bg-black rounded-lg  p-4 h-[60%] overflow-hidden ">
                <pre>
                    import time
                    import functools
                    ........
                </pre>
            </div>
            <div className="flex gap-1"> 
                {snippet.tags.map((tag)=>(
                    <div  key={tag} className="bg-[#003153] border border-gray-300 rounded-lg p-1" >
                    {tag}
                    </div>
                ))
                  }
                <button className={snippet.fav==false ? "bg-grey border border-gray-300 rounded-lg p-1" : "bg-orange-500 border border-gray-300 rounded-lg p-1"} onClick={(e)=>{ e.stopPropagation() 
                                                                                                                                                                               togglefavourites(snippet.id)}}>Mark as Fav</button>
            </div>
        </div>
    )
}
export default Snippetcard