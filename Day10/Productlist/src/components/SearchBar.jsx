import React from "react";

const SearchBar = ({ searchTerm, onSearch, onClear }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
      />
      <button onClick={onClear}>Clear</button>
    </div>
  );
};

export default SearchBar;
