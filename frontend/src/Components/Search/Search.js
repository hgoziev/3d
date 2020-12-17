import React from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/SearchRounded";
import Icons from "../../Icons/Icons";

function Search() {
  return (
    <div className="search">
      <form className="search__form">
        {/* <SearchIcon className="search__icon" /> */}
        <input type="text" className="search__input" />
        <button className="search__submit">Search</button>
      </form>
      <div className="search__icons">
        <Icons />
      </div>
    </div>
  );
}

export default Search;
