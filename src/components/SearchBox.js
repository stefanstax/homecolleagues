import React from "react";

const SearchBox = ({searchChange}) => {
  return <input className="pa3 w7 bn br3" onChange={searchChange} type="search" placeholder="Search for a robot..." />;
};

export default SearchBox;
