function Snippetmodal({

Selectedsnippet,

setSelectedsnippet

}){

if(!Selectedsnippet)
return null

return(

<div
className="
fixed
inset-0
bg-black/70
flex
justify-center
items-center
z-50
"
>

<div
className="
bg-[#111]
w-[700px]
rounded-xl
p-6
text-white
"
>

<h2
className="
text-2xl
mb-4
"
>

{Selectedsnippet.title}

</h2>

<p>

Language:
{Selectedsnippet.language}

</p>

<pre
className="
bg-black
mt-4
p-4
rounded
"
>

code preview

</pre>

<button

onClick={()=>
setSelectedsnippet(null)
}

className="
mt-4
bg-red-600
px-4
py-2
rounded
"

>

Close

</button>

</div>

</div>

)

}

export default Snippetmodal