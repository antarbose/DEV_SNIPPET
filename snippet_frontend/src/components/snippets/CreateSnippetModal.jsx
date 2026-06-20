import { useState } from "react"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog"

import {
  Card,
  CardContent
} from "@/components/ui/card"

import {
  Input
} from "@/components/ui/input"

import {
  Textarea
} from "@/components/ui/textarea"

import {
  Button
} from "@/components/ui/button"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"

import {
  Code2,
  X
} from "lucide-react"



function CreateSnippetModal({
  ShowCreateModal,
  setShowCreateModal,
  snippets,
  AddSnippetToDashboard
}) {


  const [title, setTitle] = useState("")
  const [language, setLanguage] = useState("javascript")
  const [description, setDescription] = useState("")
  const [tags, setTags] = useState("")
  const [code, setCode] = useState("")



  function createSnippet() {


    if (
      title.trim() === "" ||
      tags.trim() === "" ||
      code.trim() === ""
    ) {

      return

    }


    AddSnippetToDashboard(
      snippets.length + 1,
      language,
      title,
      description,
      tags,
      code
    )


    setShowCreateModal(false)

  }



  return (

<Dialog
    open={ShowCreateModal}
    onOpenChange={setShowCreateModal}
>

<DialogContent
className="
max-w-[750px]
max-h-[90vh]
overflow-hidden
bg-[#09090b]
border border-white/10
rounded-3xl
text-white
"
>


<div className="flex flex-col h-full">


<DialogHeader className="pb-5">


<div className="flex items-center gap-3">


<div
className="
h-11
w-11
rounded-2xl
bg-gradient-to-br
from-blue-500
to-purple-600
flex
items-center
justify-center
"
>

<Code2 size={22}/>

</div>


<div>

<DialogTitle
className="
text-2xl
font-bold
"
>

Create New Snippet

</DialogTitle>


<DialogDescription
className="
text-zinc-400
"
>

Save your reusable code snippets

</DialogDescription>


</div>


</div>


</DialogHeader>





<div
className="
overflow-y-auto
pr-3
space-y-5
max-h-[65vh]
scrollbar-thin
scrollbar-thumb-zinc-700
"
>



<Card
className="
bg-transparent
border-none
"
>


<CardContent
className="
space-y-5
p-0
"
>


{/* ID */}

<div>

<label className="text-sm text-zinc-400">
Snippet ID
</label>


<Input
value={snippets.length+1}
readOnly
className="
mt-2
bg-white/5
border-white/10
"
/>

</div>




{/* Title */}

<div>

<label className="text-sm text-zinc-400">
Title
</label>


<Input

placeholder="React debounce hook"

value={title}

onChange={(e)=>setTitle(e.target.value)}

className="
mt-2
bg-white/5
border-white/10
"

/>

</div>





{/* Language */}

<div>

<label className="text-sm text-zinc-400">
Language
</label>


<Select
value={language}
onValueChange={setLanguage}
>


<SelectTrigger
className="
mt-2
bg-white/5
border-white/10
"
>

<SelectValue/>

</SelectTrigger>


<SelectContent>


<SelectItem value="javascript">
Javascript
</SelectItem>


<SelectItem value="typescript">
Typescript
</SelectItem>


<SelectItem value="python">
Python
</SelectItem>


<SelectItem value="sql">
SQL
</SelectItem>


<SelectItem value="rust">
Rust
</SelectItem>


<SelectItem value="bash">
Bash
</SelectItem>


</SelectContent>


</Select>


</div>






{/* Description */}

<div>

<label className="text-sm text-zinc-400">
Description
</label>


<Textarea

rows={3}

placeholder="Explain your snippet..."

value={description}

onChange={(e)=>setDescription(e.target.value)}

className="
mt-2
bg-white/5
border-white/10
resize-none
"

/>

</div>





{/* Tags */}

<div>

<label className="text-sm text-zinc-400">
Tags
</label>


<Input

placeholder="#react,#hooks,#frontend"

value={tags}

onChange={(e)=>setTags(e.target.value)}

className="
mt-2
bg-white/5
border-white/10
"

/>


</div>





{/* Code */}

<div>

<label className="text-sm text-zinc-400">
Code
</label>


<Textarea

rows={10}

placeholder="// paste your code here"

value={code}

onChange={(e)=>setCode(e.target.value)}

className="
mt-2
bg-black
border-white/10
font-mono
text-sm
resize-none
"

/>


</div>


</CardContent>


</Card>



</div>





<div
className="
flex
justify-end
gap-3
pt-5
border-t
border-white/10
"
>


<Button

variant="outline"

onClick={()=>setShowCreateModal(false)}

className="
rounded-xl
border-white/10
bg-white/5
hover:bg-white/10
"

>

Cancel

</Button>



<Button

onClick={createSnippet}

className="
rounded-xl
bg-gradient-to-r
from-blue-600
to-purple-600
hover:from-blue-500
hover:to-purple-500
"

>

Create Snippet

</Button>



</div>



</div>


</DialogContent>


</Dialog>

)
}


export default CreateSnippetModal