import React from "react";

function Search({search,setSearchString}){
    return (
        <div className="">
            <form className="d-flex" role="search">
            <input onInput={(event)=>{setSearchString(event.target.value)}}value={search}className="form-control me-2" type="search" placeholder="Search ..." aria-label="Search"/>
            <button className="btn btn-outline-info" type="submit">Search</button>
      </form>

        </div>
    )
}
export default Search;