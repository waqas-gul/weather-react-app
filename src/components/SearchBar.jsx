import React, { useRef } from "react";

const SearchBar = ({ searchInput }) => {
  const inputValue = useRef();

  const handleSearch = () => {
    searchInput(inputValue.current.value);
    inputValue.current.value="";
  };

  return (
    <div className="search-bar">
      <input type="text" placeholder="Search" ref={inputValue} />
      <img src="images/search.png" alt="Search" onClick={handleSearch} />
    </div>
  );
};

export default SearchBar;
