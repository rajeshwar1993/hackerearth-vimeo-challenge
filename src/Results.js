import React, { useState, useEffect } from "react";

const Results = ({ trans, currentPage, pageChange, pages }) => {
  const [pagi, updatePagi] = useState();

  useEffect(() => {
    let p = [];
    for (let i = 0; i < pages; i++) {
      p.push(
        <li class="page-item">
          <a class="page-link" href="#">
            {i + 1}
          </a>
        </li>
      );
    }

    updatePagi(p);
  }, [pages]);

  return (
    <div className={"results"}>
      <table className={"results-table table table-striped"}>
        <thead>
          <tr>
            <th scope="col">S. No</th>
            <th scope="col">Account No</th>
            <th scope="col">Date</th>
            <th scope="col">Transaction Details</th>
            <th scope="col">Value Date</th>
            <th scope="col">Withdrawal AMT</th>
            <th scope="col">Deposit AMT</th>
            <th scope="col">Balance AMT</th>
          </tr>
        </thead>
        <tbody>
          {trans.map((tr, i) => {
            return (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{tr["Account No"]}</td>
                <td>{tr["Date"]}</td>
                <td>{tr["Transaction Details"]}</td>
                <td>{tr["Value Date"]}</td>
                <td>{tr["Withdrawal AMT"]}</td>
                <td>{tr["Deposit AMT"]}</td>
                <td>{tr["Balance AMT"]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <nav>
        <ul class="pagination">{pagi}</ul>
      </nav>
    </div>
  );
};

export default Results;
