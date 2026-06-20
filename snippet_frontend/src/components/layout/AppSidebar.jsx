import {
    Sidebar as ShadSidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarFooter,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import {
    Code2,
    Star,
    Database,
    Hash,
    Plus,
    Terminal,
    FileCode2
} from "lucide-react"



function AppSidebar({

    Selectedlanguage,
    setSelectedlanguage,
    setFavourites,
    setShowCreateModal

}) {

    const languages = [
        {
            name: "typescript",
            icon: Code2
        },
        {
            name: "javascript",
            icon: FileCode2
        },
        {
            name: "sql",
            icon: Database
        },
        {
            name: "rust",
            icon: Terminal
        },
        {
            name: "bash",
            icon: Terminal
        },
        {
            name: "python",
            icon: Code2
        }
    ]

    const tags = [
        "#arrays",
        "#cleanup",
        "#database"
    ]

    return (

        <ShadSidebar
            variant="inset"
            className="sidebar-dark"
        >

            {/* Header */}

            <SidebarHeader
                className="
                px-5
                py-6
                "
            >

                <div className="
                flex
                items-center
                gap-2
                "
                >

                    <div
                        className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-xl
                        bg-blue-600
                        "
                    >
                        <Code2 size={20} />
                    </div>


                    <h2 className="sidebar-logo text-xl font-bold text-white">
                        snippets
                    </h2>
                </div>

            </SidebarHeader>



            <SidebarContent
                className="
                px-3
                "
            >


                {/* Main */}

                <SidebarGroup>

                    <SidebarGroupContent>

                        <SidebarMenu>


                            <SidebarMenuItem>

                                <SidebarMenuButton
                                    isActive={
                                        Selectedlanguage === "All"
                                    }
                                    className="
                                    h-10
                                    rounded-xl
                                    text-zinc-400
                                    hover:text-white
                                    hover:bg-zinc-800
                                    data-[active=true]:bg-blue-600
                                    data-[active=true]:text-white
                                    transition-all
                                    "
                                    onClick={() => {
                                        setSelectedlanguage("All")
                                        setFavourites(false)
                                    }}
                                >

                                    <FileCode2 size={18} />

                                    All Snippets

                                </SidebarMenuButton>

                            </SidebarMenuItem>



                            <SidebarMenuItem>

                                <SidebarMenuButton

                                    className="
                                    h-10
                                    rounded-xl
                                    text-zinc-400
                                    hover:text-white
                                    hover:bg-zinc-800
                                    transition-all
                                    "

                                    onClick={() =>
                                        setFavourites(true)
                                    }
                                >

                                    <Star size={18} />

                                    Favourites

                                </SidebarMenuButton>

                            </SidebarMenuItem>


                        </SidebarMenu>


                    </SidebarGroupContent>

                </SidebarGroup>




                {/* Languages */}

                <SidebarGroup>

                    <SidebarGroupLabel
                        className="
                        text-xs
                        uppercase
                        tracking-widest
                        text-zinc-500
                        "
                    >
                        Languages
                    </SidebarGroupLabel>


                    <SidebarGroupContent>

                        <SidebarMenu>


                            {
                                languages.map((lang) => {

                                    const Icon = lang.icon


                                    return (

                                        <SidebarMenuItem
                                            key={lang.name}
                                        >

                                            <SidebarMenuButton

                                                isActive={
                                                    Selectedlanguage === lang.name
                                                }

                                                className="
                                            h-9
                                            rounded-xl
                                            text-zinc-400
                                            hover:bg-zinc-800
                                            hover:text-white
                                            data-[active=true]:bg-blue-600
                                            data-[active=true]:text-white
                                            transition-all
                                            "

                                                onClick={() => {

                                                    setSelectedlanguage(lang.name)
                                                    setFavourites(false)

                                                }}

                                            >

                                                <Icon size={16} />

                                                {lang.name}

                                            </SidebarMenuButton>


                                        </SidebarMenuItem>

                                    )

                                })
                            }


                        </SidebarMenu>


                    </SidebarGroupContent>


                </SidebarGroup>




                {/* Tags */}


                <SidebarGroup>

                    <SidebarGroupLabel
                        className="
                        text-xs
                        uppercase
                        tracking-widest
                        text-zinc-500
                        "
                    >
                        Tags
                    </SidebarGroupLabel>


                    <SidebarGroupContent>

                        <div
                            className="
                        flex
                        flex-wrap
                        gap-2
                        px-2
                        "
                        >

                            {
                                tags.map(tag => (

                                    <span className="sidebar-tag">

                                        <Hash size={12}
                                            className="inline mr-1"
                                        />

                                        {tag.replace("#", "")}

                                    </span>

                                ))
                            }

                        </div>


                    </SidebarGroupContent>


                </SidebarGroup>



            </SidebarContent>




            <SidebarFooter
                className="
                p-4
                "
            >

                <Button

                    className="sidebar-create w-full"

                    onClick={() =>
                        setShowCreateModal(true)
                    }

                >

                    <Plus size={18} />

                    New Snippet


                </Button>


            </SidebarFooter>



        </ShadSidebar>

    )
}



export default AppSidebar