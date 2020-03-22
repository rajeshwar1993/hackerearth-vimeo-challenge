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
            className={"form-control"}
            onChange={e => {
              textChange(e.nativeEvent.target.value);
            }}
          />
        </div>
        <div className={"col-4"}>
          <select className={"form-control"}>
            <option default value="">
              No Filter
            </option>
            <option value="Date">Date</option>
            <option value="Value Date">Value Date</option>
            <option value="Balance AMT">Balance AMT</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchAndFilter;
