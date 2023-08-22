import React, { useState } from "react";
import "../css/SearchBar.css";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    debugger
    setSearchTerm(e.target.value)
    onSearch(e.target.value);
  };
 
  return (
    <div className="search-container">
      <input
         onInput={handleSearch}
        type="text"
        className="search-input"
        placeholder=" Search Note.."
        value={searchTerm}
      />
      
    </div>
  );
}
export default SearchBar;


