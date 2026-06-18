function Sidebar({
    Selectedlanguage,
    setSelectedlanguage,
    setFavourites,
    setShowCreateModal
}) {

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
        <div className="flex flex-col w-64 h-screen bg-[#0D1117] text-[#D1D5DB] overflow-y-auto border-r border-[#202938]">

            {/* Logo */}
            <div className="px-6 py-6 border-b border-[#202938]">
                <h2 className="text-xl font-bold text-white">
                    snippets
                </h2>
            </div>

            {/* Navigation */}
            <div className="flex flex-col gap-1 px-3 py-5">

                <div
                    className="w-full px-4 py-3 rounded-lg cursor-pointer bg-[#2A1B05] text-yellow-400 font-medium flex justify-between hover:bg-[#3a2508]"
                    onClick={()=>{
                        setFavourites(false)
                        setSelectedlanguage("All")
                    }}
                >
                    <span>All</span>
                </div>

                <div
                    className="w-full px-4 py-3 rounded-lg cursor-pointer hover:bg-[#161B22] transition"
                    onClick={()=> setFavourites(true)}
                >
                    Favourites
                </div>

            </div>

            {/* Languages */}
            <div className="px-6">

                <h4 className="uppercase text-xs text-gray-500 tracking-wider mb-4">
                    Languages
                </h4>

                <ul className="flex flex-col gap-1">

                    {languages.map((lang)=>(

                        <li
                            key={lang}
                            className={`px-3 py-2 rounded-lg cursor-pointer transition
                            ${
                                Selectedlanguage===lang
                                ? "bg-[#161B22] text-yellow-400"
                                : "hover:bg-[#161B22]"
                            }`}
                            onClick={()=>{
                                setFavourites(false)
                                setSelectedlanguage(lang)
                            }}
                        >

                            <div className="flex items-center gap-3">

                                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>

                                {lang}

                            </div>

                        </li>

                    ))}

                </ul>

            </div>

            {/* Tags */}
            <div className="px-6 mt-8">

                <h4 className="uppercase text-xs text-gray-500 tracking-wider mb-4">
                    Tags
                </h4>

                <ul className="flex flex-col gap-1">

                    {tags.map((tag)=>(

                        <li
                            key={tag}
                            className="px-3 py-2 rounded-lg cursor-pointer hover:bg-[#161B22]"
                        >
                            {tag}
                        </li>

                    ))}

                </ul>

            </div>

            {/* Bottom Button */}
            <div className="mt-auto p-5">

                <button
                    className="
                    w-full
                    bg-[#F59E0B]
                    hover:bg-[#D97706]
                    text-black
                    font-semibold
                    py-3
                    rounded-xl
                    transition
                    shadow-md
                    cursor-pointer
                    "
                    onClick={()=> setShowCreateModal(true)}
                >
                    + New Snippet
                </button>

            </div>

        </div>
    )
}

export default Sidebar