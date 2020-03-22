import React, { useState, useEffect } from "react";
//import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import transactionsData from "./staticData";
import SearchAndFilter from "./SearchAndFilter";
import Results from "./Results";
import "./styles.css";

export default function App() {
  const [transactions, updateTransactions] = useState(transactionsData.splice(0,5));

  const [searchText, updateSearchText] = useState("");
  const [filterBy, updateFilterBy] = useState("");
  const [currentPage, updateCurrentPage] = useState(0);

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
    console.log(transactions);

    let temp = transactionsData;

    if(searchText){
      temp = temp.map(tr => {
        if(tr["Account No"].toString().includes(searchText)){
          return tr;
        }
      })
    }

    if(filterBy){
      temp = temp.sort(function(a, b){
        if(a<b) return -1;
        else if(a>b) return 1;
        else return 0;
      })
    }

    if(currentPage){
      temp = temp.splice(currentPage*10, 10);
    }

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
