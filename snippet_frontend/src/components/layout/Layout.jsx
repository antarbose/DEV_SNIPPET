import AppSidebar from "./AppSidebar.jsx"
import AppHeader from "./AppHeader.jsx"

import {
    SidebarProvider,
    SidebarInset
} from "@/components/ui/sidebar"

function Layout({
    Selectedlanguage,
    setSelectedlanguage,
    Searchcontent,
    setSearchcontent,
    children,
    setFavourites,
    setShowCreateModal
}) {

    return (

        <SidebarProvider>

            <div className="
                flex
                h-screen
                w-full

                bg-[#09090b]

                text-white

                overflow-hidden
                ">

                <AppSidebar
                    Selectedlanguage={Selectedlanguage}
                    setSelectedlanguage={setSelectedlanguage}
                    setFavourites={setFavourites}
                    setShowCreateModal={setShowCreateModal}
                />


                <SidebarInset

                    className="
                    flex
                    flex-col

                    bg-[#09090b]

                    "
                >


                    <AppHeader
                        Searchcontent={Searchcontent}
                        setSearchcontent={setSearchcontent}
                        setFavourites={setFavourites}
                    />

                    <main

                        className="
                        flex-1

                        overflow-y-auto

                        p-6

                        scrollbar-thin

                        scrollbar-thumb-zinc-800

                        "

                    >

                        {children}


                    </main>



                </SidebarInset>

            </div>

        </SidebarProvider>

    )

}

export default Layout