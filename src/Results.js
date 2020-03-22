import React from "react";

const Results = ({ trans }) => {
  return (
    <div className={"results"}>
      <table className={"results-table"}>
        <thead>
          <tr>
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
          {trans.map(tr => {
            return (
              <tr key={`${tr["Account No"]} - ${tr["Date"]} - ${tr["Deposit AMT"]} - ${tr["Balance AMT"]}`}>
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
