import React, { useState, useEffect } from "react";
//import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import transactionsData from "./staticData";
import SearchAndFilter from "./SearchAndFilter";
import Results from "./Results";
import "./styles.css";

export default function App() {
  const [transactions, updateTransactions] = useState([]);
  const [transactionsToShow, updateTransactionsToShow] = useState([]);
  const [searchText, updateSearchText] = useState("");
  const [filterBy, updateFilterBy] = useState("");
  const [currentPage, updateCurrentPage] = useState(1);

  useEffect(() => {
    // TRIED TO GET DATA FROM API
    //BUT GOT NETWOR ERROR ALWAYS

    // fetch("http://starlord.hackerearth.com/bankAccount", {
    //   method: "GET",
    //   mode: "cors"
    // })
    //   .then(data => {
    //     console.log("here");
    //     console.log(data);
    //   })
    //   //.then(tr => {console.log(tr)})
    //   .catch(err => {
    //     console.log("here2");
    //     console.log(err);
    //   });

    let temp = transactionsData.slice();

    console.log("initial", temp);

    if (searchText) {
      let acc = [];
      temp.forEach(tr => {
        if (
          tr["Transaction Details"]
            .toString()
            .toLowerCase()
            .includes(searchText.toLowerCase())
        ) {
          acc.push(tr);
        }
      });
      temp = acc;
      console.log("searching", temp);
    }

    if (temp.length > 0 && filterBy) {
      temp = temp.sort(function(a, b) {
        if (a[filterBy] < b[filterBy]) return -1;
        else if (a[filterBy] > b[filterBy]) return 1;
        else return 0;
      });
      console.log("filtering", temp);
    }
    updateTransactions(temp);

    if (temp.length > 0 && currentPage) {
      console.log("paging", (currentPage - 1) * 10 + 10);
      temp = temp.slice((currentPage - 1) * 10, (currentPage - 1) * 10 + 10);
      console.log("paginged", temp);
    }
    console.log(temp);

    updateTransactionsToShow(temp);
  }, [searchText, filterBy, currentPage]);

  const textChange = val => {
    console.log(val);
    updateSearchText(val);
  };

  const filterChange = val => {
    console.log("filter", val);
    updateFilterBy(val);
  };

  const pageChange = val => {
    updateCurrentPage(val);
  };

  return (
    <div className="App">
      <div className={"header"}>
        <h1>Account Details</h1>
      </div>
      <SearchAndFilter
        searchText={searchText}
        textChange={textChange}
        filterBy={filterBy}
        filterChange={filterChange}
      />
      <Results
        trans={transactionsToShow}
        currentPage={currentPage}
        pageChange={pageChange}
        pages={transactions.length / 10}
      />
    </div>
  );
}
