import { useState, useEffect } from "react"

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

import Editor from "@monaco-editor/react"

import { CreateSnippet, UpdateSnippet } from "@/api/snippet.api.js"



function CreateSnippetModal({
  ShowCreateModal,
  setShowCreateModal,
  snippets,
  AddSnippetToDashboard,
  currentSnippet,
  isEditing,// to check whether we want to edit snippet or create snippet.....
  setIsEditing,
  UpdateSnippetInDashboard
}) {


  const [title, setTitle] = useState("")
  const [language, setLanguage] = useState("javascript")
  const [description, setDescription] = useState("")
  const [tags, setTags] = useState("")
  const [code, setCode] = useState("")




  useEffect(() => { //to keep my fields prefilled if i want to edit snippet......

    if (
      isEditing &&
      currentSnippet
    ) {

      setTitle(
        currentSnippet.title
      )

      setLanguage(
        currentSnippet.language
      )

      setDescription(
        currentSnippet.description || ""
      )

      setTags(
        currentSnippet.tags || ""
      )

      setCode(
        currentSnippet.code
      )
    }

  }, [
    isEditing,
    currentSnippet
  ])








  // for handling create snippets....
  async function handleCreateSnippet() {

    if (

      title.trim() === "" ||

      language.trim() === "" ||

      code.trim() === ""

    ) {

      alert(
        "Fill all fields"
      )

      return

    }

    try {

      const response =

        await CreateSnippet({

          title,

          code,

          language





        })


      // instantly update dashboard

      AddSnippetToDashboard(

        response.data

      )


      // reset form

      setTitle("")

      setLanguage("javascript")

      setDescription("")

      setTags("")

      setCode("")


      setShowCreateModal(false)

    }

    catch (error) {

      alert(

        error.response
          ?.data
          ?.message

        ||

        "Snippet creation failed"

      )

    }

  }


  // function for updating snippets....

  async function saveSnippet() {

    try {


      console.log("Current snippet:", currentSnippet);
      console.log("Updating ID:", currentSnippet?._id);



      const response =
        await UpdateSnippet(

          currentSnippet._id,

          {
            title,
            language,
            description,
            tags,
            code
          }

        )

      console.log("Update response:", response);

      UpdateSnippetInDashboard(
        response.data
      )

      setShowCreateModal(false)
      setIsEditing(false)

    }

    catch (error) {
      console.log("Update error:", error);
      alert(
        "Update failed"
      )

    }
  }




  console.log("Editing snippet:", currentSnippet);

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

                <Code2 size={22} />

              </div>


              <div>

                <DialogTitle
                  className="
text-2xl
font-bold
"
                >

                  {isEditing ? "Update Snippet" : "Create New Snippet"}

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

                {/* 
                {/* ID */}

                <div>
                  {/* 
                  <label className="text-sm text-zinc-400">
                    Snippet ID
                  </label>


                  <Input
                    value={isEditing? currentSnippet.id : snippets.length + 1}
                    readOnly
                    className="
mt-2
bg-white/5
border-white/10
"
                  /> */}

                </div>




                {/* Title */}

                <div>

                  <label className="text-sm text-zinc-400">
                    Title
                  </label>


                  <Input

                    placeholder="React debounce hook"

                    value={title}

                    onChange={(e) => setTitle(e.target.value)}

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

                      <SelectValue />

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

                    onChange={(e) => setDescription(e.target.value)}

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

                    onChange={(e) => setTags(e.target.value)}

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

                  <Editor
                    height="400px"
                    language={language}
                    theme="vs-dark"
                    value={code}
                    onChange={(value) =>
                      setCode(value)
                    }
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

              onClick={() => setShowCreateModal(false)}

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

              onClick={isEditing ? saveSnippet : handleCreateSnippet}

              className="
rounded-xl
bg-gradient-to-r
from-blue-600
to-purple-600
hover:from-blue-500
hover:to-purple-500
"

            >

              {isEditing ? "Update Snippet" : "Create  Snippet"}

            </Button>



          </div>



        </div>


      </DialogContent>


    </Dialog>

  )
}


export default CreateSnippetModal