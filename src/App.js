import React, { useState, useEffect } from "react";
//import axios from "axios";
import transactionsData from "./staticData";
import "./styles.css";

export default function App() {
  const [transactions, updateTransactions] = useState(transactionsData);

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
  }, []);

  return <div className="App"> NEW APP</div>;
}
