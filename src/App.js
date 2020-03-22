import React, { useState, useEffect } from "react";
//import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import transactionsData from "./staticData";
import SearchAndFilter from "./SearchAndFilter";
import Results from "./Results";
import "./styles.css";

export default function App() {
  const [transactions, updateTransactions] = useState(
    transactionsData.splice(0, 15)
  );

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

    let temp = transactionsData;

    console.log(temp);

    if (searchText) {
      console.log("searching");
      temp = temp.map(tr => {
        if (tr["Account No"].toString().includes(searchText)) {
          return tr;
        }
      });
    }

    if (filterBy) {
      console.log("filtering");
      temp = temp.sort(function(a, b) {
        if (a < b) return -1;
        else if (a > b) return 1;
        else return 0;
      });
    }

    if (currentPage) {
      console.log("paging");
      temp = temp.slice(0, 10);
    }
    console.log(temp);

    updateTransactions(temp);
  }, [searchText, filterBy, currentPage]);

  return (
    <div className="App">
      <div className={"header"}>
        <h1>Account Details</h1>
      </div>
      <SearchAndFilter />
      <Results trans={transactions} />
    </div>
  );
}
