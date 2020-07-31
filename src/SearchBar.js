import React from "react";

const SearchBar = ({filterFunction}) => {
  return (
    <div className="w-100 inline-flex flex-row justify-center">
      <input type="search " name="searchText" onChange={filterFunction} />
    </div>
  );
};

export default SearchBar;
