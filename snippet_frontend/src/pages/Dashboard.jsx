import { useState } from "react";
import Snippetcard from "../components/snippets/Snippetcard.jsx";
import Sidebar from "../components/layout/Sidebar.jsx";
import Snippetmodal from "../components/snippets/Snippetmodal.jsx";
import CreateSnippetModal from "../components/snippets/CreateSnippetModal.jsx";
function Dashboard({Selectedlanguage,Searchcontent,Selectedsnippet,setSelectedsnippet,Favourites,setFavourites,ShowCreateModal, setShowCreateModal}) {
    const[snippets,setSnippets]=useState([   // snippets is given under state because we want to update snippets whenever we click on Mark as fav of a particular snippet...the key value pair "fav" of that snippet must change

{
id:1,
language:"PYTHON",
title:"Python Retry Decorator",
description:"Retry a function on exception",
tags:"#retry,#decorator",
fav:false,
code:"import tools "
},

{
id:2,
language:"SQL",
title:"Postgres Upsert",
description:"Insert or update rows",
tags:"#database,#sql",
fav:false,
code:"import tools "
},

{
id:3,
language:"JAVASCRIPT",
title:"Flatten Nested Array",
description:"Recursive flatten function",
tags:"#array,#recursive",
fav:false,
code:"import tools "
},

{
id:4,
language:"RUST",
title:"Ownership Swap",
description:"Swap ownership safely",
tags:"#rust",
fav:false,
code:"import tools "
},

{
id:5,
language:"BASH",
title:"Git Cleanup",
description:"Delete merged branches",
tags:"#git",
fav:false,
code:"import tools "
},

{
id:6,
language:"TYPESCRIPT",
title:"useDebounce Hook",
description:"Debounce state changes",
tags:"#hook",
fav:false,
code:"import tools "
}

])
    let showSnippets=[]/*const snippets=[

{
id:1,
language:"PYTHON",
title:"Python Retry Decorator",
description:"Retry a function on exception",
tags:["#retry","#decorator"],
fav:false
},

{
id:2,
language:"SQL",
title:"Postgres Upsert",
description:"Insert or update rows",
tags:["#database","#sql"],
fav:false
},

{
id:3,
language:"JAVASCRIPT",
title:"Flatten Nested Array",
description:"Recursive flatten function",
tags:["#array","#recursive"],
fav:false
},

{
id:4,
language:"RUST",
title:"Ownership Swap",
description:"Swap ownership safely",
tags:["#rust"],
fav:false
},

{
id:5,
language:"BASH",
title:"Git Cleanup",
description:"Delete merged branches",
tags:["#git"],
fav:false
},

{
id:6,
language:"TYPESCRIPT",
title:"useDebounce Hook",
description:"Debounce state changes",
tags:["#hook"],
fav:false
}

]
*/
function togglefavourites(id){  //This function is created so that whenever we "mark as fav" a snippet it becomes favourite and vice versa...it basically returns the updated snippet  array...the func takes id as paramater so that only the particular snippet we select gets marked as fav....
    setSnippets(()=>{
       return  snippets.map((snippet)=>{
           if (id===snippet.id){
            return({
             id:snippet.id,
             language:snippet.language,
             title:snippet.title,
             description:snippet.description,
             tags:snippet.tags,
             fav:!snippet.fav,
             code:snippet.code
            })
            
          }
           else return snippet
        })
    })
}

if(Favourites==true){
      showSnippets=snippets.filter((snippet)=>{
        return snippet.fav==true
    })
    if(showSnippets.length==0) // this is done becoz if there are no fav snippets and we click on favourites the showsnippets would have been empty
        showSnippets=snippets
}
else{
if(Selectedlanguage=="All"){
    if(Searchcontent==""){
      showSnippets=snippets;
    }
    else{
     showSnippets=snippets.filter((snippet)=>{
        const search_snippets=(snippet.title.toLowerCase()).includes(Searchcontent.toLowerCase())
        return search_snippets
    })
}
}
else{
      showSnippets=snippets.filter((snippet)=>{
        const filtered_snippets=Selectedlanguage===snippet.language.toLowerCase() 
       
        return(filtered_snippets)
    })
    if(Searchcontent!=""){
    showSnippets=snippets.filter((snippet)=>{
        const search_snippets=(snippet.title.toLowerCase()).includes(Searchcontent.toLowerCase())
        return (search_snippets)
    })
}
}
}

function AddSnippetToDashboard(id,lang,title,description,tags,code){ // This function is created such that whenever user clicks on create snippet inside create snippet form... the new snippet gets added to the dashboard...
      const newSnippet={     // snippet created after clicking on create new snippet...
        id:id,
        language:lang.toUpperCase(),
        title:title,
        description:description,
        tags:tags,
        code:code,
        fav:false
      }
      return setSnippets((prev)=>{return [...prev,newSnippet]}) //slight mistake made here...used snippets instead of prev..always use prev to track record of previous state
}


console.log(showSnippets)
return (

    
    <div className="p-2 ">

     <div className="grid grid-cols-3 gap-2">
        
         {showSnippets.map((snippet)=>(
            <Snippetcard
            key={snippet.id}
            snippet={snippet}
            Selectedsnippet={Selectedsnippet}
            setSelectedsnippet={setSelectedsnippet}
            togglefavourites={togglefavourites}
           />
         ))}

         
         
        
     </div>
     <Snippetmodal
      Selectedsnippet={Selectedsnippet}
      setSelectedsnippet={setSelectedsnippet}
     
      />
     <CreateSnippetModal
      ShowCreateModal={ShowCreateModal}
      setShowCreateModal={setShowCreateModal}
      snippets={snippets}
      AddSnippetToDashboard={AddSnippetToDashboard}
      />
</div>

)

}

export default Dashboard

