import React from "react";

const Results = ({ trans }) => {
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
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#">
              1
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              3
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Results;
