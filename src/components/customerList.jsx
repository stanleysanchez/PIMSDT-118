import React from "react";
import "../css/customerList.css";

const CustomerList = (props) => {  
  return (
    <React.Fragment>
      <table class="tableMain">
        <tbody>
          <th>Customer's Monitored:</th>
          {props.custList.map((c) => (
            <tr> - {c}</tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default CustomerList;
