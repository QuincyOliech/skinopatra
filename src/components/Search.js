import React from "react";


function Search({search,setSearchString}){
    return (
        <div className="search-bar">
            <form className="d-flex" role="search">
            <input onInput={(event)=>{setSearchString(event.target.value)}}value={search}className="form-control mx-5" type="search" placeholder="Search Category... " aria-label="Search"/>
            
      </form>

        </div>
    )
}
export default Search;