function Header({Searchcontent,setSearchcontent,setFavourites}){
    return(
        <div className="flex justify-between items-center px-8 py-6 text-white bg-[#003153]">
            <h2>All Snippets</h2>
            <input 
                type="text"
                placeholder="Search sementically...."
                className="w-[400px] bg-[#111] rounded-lg p-3"
                value={Searchcontent}
                onChange={(e)=>{setFavourites(false)
                    setSearchcontent(e.target.value)}}
            />
            <button className="p-3 rounded-lg bg-yellow-600">+New</button>
        </div>
    )
}
export default Header