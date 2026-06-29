import { useState } from "react"
import { FiEdit } from "react-icons/fi"
import { Trash2 } from "lucide-react"
import {
  Copy
}
from "lucide-react"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card"

import { Badge } from "@/components/ui/badge"

import { Button } from "@/components/ui/button"
import {

    DeleteSnippet

}

    from "@/api/snippet.api.js"

import {

    ToggleFavourite

}

    from "@/api/snippet.api"



function Snippetcard({
    snippet,

    Selectedsnippet,
    setSelectedsnippet,
    setIsEditing,
    setShowCreateModal,
    setCurrentSnippet,
    RemoveSnippetFromDashboard,
    UpdateFavouriteInDashboard
    // setShowEditSnippet,
    // editId,
    //setEditId
}) {

    const [
        copied,
        setCopied
    ] =
        useState(false)

    // this function handles delete snippet....

    async function handleDelete() {

        const confirmDelete =

            window.confirm(

                "Delete this snippet?"

            )

        if (!confirmDelete)
            return

        try {

            await DeleteSnippet(
                snippet._id
            )

            RemoveSnippetFromDashboard(
                snippet._id
            )

        }

        catch {

            alert(
                "Delete failed"
            )

        }

    }


    // This function handles favourite snippets...

    async function handleFavourite() {

        try {

            const response =

                await ToggleFavourite(
                    snippet._id
                )

            UpdateFavouriteInDashboard(
                response.data
            )

        }

        catch {

            alert(
                "Failed"
            )

        }

    }


    // This function handles copy snippet...

    async function handleCopy() {

        try {

            await navigator
                .clipboard
                .writeText(
                    snippet.code
                )

            setCopied(true)

            setTimeout(() => {

                setCopied(false)

            }, 2000)

        }

        catch {

            alert(
                "Failed to copy"
            )

        }

    }


    return (

        <Card

            onClick={() => setSelectedsnippet(snippet)}

            className="
group

cursor-pointer

bg-[#111318]

border

border-white/10

rounded-2xl

text-white

transition-all

duration-300

hover:-translate-y-1

hover:border-blue-500/40

hover:shadow-xl

hover:shadow-blue-500/10

"

        >


            <CardHeader
                className="
pb-3
"
            >


                <div
                    className="
flex

items-center

justify-between
"
                >


                    <Badge

                        variant="outline"

                        className="
border-blue-500/30

bg-blue-500/10

text-blue-400

uppercase

text-xs

tracking-wider
"

                    >

                        {snippet.language}

                    </Badge>
                    <div className="flex ">
                        <Button
                            size="icon"
                            variant="ghost"
                            className="
                            text-zinc-400
                          hover:text-white
                            hover:bg-white/10"

                            onClick={(e) => {
                                e.stopPropagation();
                                setIsEditing(true)
                                setCurrentSnippet(snippet)
                                setShowCreateModal(true)

                            }}
                        >
                            <FiEdit size={18} />
                        </Button>


                        <Button
                            size="icon"
                            variant="ghost"
                            className="
                            text-zinc-400
                          hover:text-white
                            hover:bg-white/10"

                            onClick={(e) => {
                                e.stopPropagation();
                                handleDelete()
                            }}
                        >
                            <Trash2 size={18} />
                        </Button>



                        <button

                            
                            onClick={(e) => {
                                e.stopPropagation();
                                handleCopy()
                            }}

                            className={`
    p-2
    rounded-lg
    transition-all

    ${copied

                                    ?

                                    "text-green-400 bg-green-500/10"

                                    :

                                    "text-zinc-500 hover:text-blue-400 hover:bg-blue-500/10"
                                }

  `}
                        >

                            <Copy size={18} />

                        </button>
                    </div>







                </div>




                <CardTitle

                    className="
mt-3

text-xl

font-semibold

tracking-tight
"

                >

                    {snippet.title}

                </CardTitle>


            </CardHeader>





            <CardContent>


                <div

                    className="
rounded-xl

bg-black

border

border-white/10

p-4

h-32

overflow-hidden
"

                >

                    <pre

                        className="
font-mono

text-sm

text-zinc-300

whitespace-pre-wrap
"

                    >

                        {snippet.code}

                    </pre>


                </div>


            </CardContent>





            <CardFooter

                className="
flex

items-center

justify-between

gap-2

flex-wrap
"

            >


                <div

                    className="
flex

gap-2

flex-wrap
"

                >


                    {
                        (snippet.tags?.split(",") || []).map(tag => (

                            <Badge

                                key={tag}

                                className="
rounded-full

bg-white/5

border

border-white/10

text-zinc-300

hover:bg-blue-500/10

"

                            >

                                #{tag.trim()}

                            </Badge>


                        ))

                    }



                </div>





                <Button

                    size="sm"

                    variant={
                        snippet.fav
                            ? "default"
                            : "outline"
                    }


                    onClick={(e) => {

                        e.stopPropagation()

                        handleFavourite()

                    }}


                    className={

                        snippet.fav

                            ?

                            "bg-orange-500 hover:bg-orange-400 text-white"

                            :

                            "border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10"

                    }


                >

                    {snippet.fav ? "★ Fav" : "☆ Fav"}


                </Button>




            </CardFooter>



        </Card>


    )

}


export default Snippetcard