import React from "react";

import "./search.css";

const Search = () => {
  return (
    <div className="search">
      <h2 className="search__title">PokeSearch</h2>
      <input type="text" className="search__input" />
    </div>
  );
};

export default Search;
