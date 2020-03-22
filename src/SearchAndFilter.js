import React from "react";

const SearchAndFilter = () => {
  return (
    <div className={"filters"}>
      <div className={"row"}>
        <div className={"col-8"}>
          <input type="search" placeholder={"Search"} />
        </div>
        <div className={"col-4"}>
          <select>
            <option value="date">Date</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchAndFilter;
