import React from "react";

const Results = ({ trans }) => {
  return (
    <div className={"results"}>
      <table className={"results-table"}>
        <thead>
          <tr>
            <th>S. No</th>
            <th>Account No</th>
            <th>Date</th>
            <th>Transaction Details</th>
            <th>Value Date</th>
            <th>Withdrawal AMT</th>
            <th>Deposit AMT</th>
            <th>Balance AMT</th>
          </tr>
        </thead>
        <tbody>
          {trans.map((tr, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
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
    </div>
  );
};

export default Results;
