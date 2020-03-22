import React from "react";

const SearchAndFilter = ({
  searchText,
  textChange,
  filterBy,
  filterChnage
}) => {
  return (
    <div className={"filters"}>
      <div className={"row"}>
        <div className={"col-8"}>
          <input
            type="search"
            placeholder={"Search"}
            value={searchText}
            onChange={e => {
              textChange(e.nativeEvent.target.value);
            }}
          />
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
