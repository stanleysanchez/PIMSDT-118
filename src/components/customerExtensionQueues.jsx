import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../css/extensionQueue.css";

const CustomerExtensionQueues = (props) => {
  const errorthreshold = 20;
  return (
    <React.Fragment>
      <table class="styled-table">
        <thead>
          <tr class="customerNames">
            <th>{props.customerName}</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Extension </th>
            <th>Queue(Extension Stats) </th>
            <th>Error(Extension Stats) </th>
            <th>Running(Extension Stats) </th>
          </tr>
          {props.stats.map((s) => (
            <React.Fragment>
              <tr>
                {parseInt(s.errorEventCount) > errorthreshold ? (
                  <th class="errorThresholdReach">{s.extension}</th>
                ) : (
                  <th>{s.extension}</th>
                )}
                <td>{s.queuedEventCount}</td>
                {parseInt(s.errorEventCount) > errorthreshold ? (
                  <td class="errorThresholdReach">
                    {s.errorEventCount}
                    <span> </span>
                    <a href={s.extentionUrl} target="_blank">
                      Go to CC                    </a>
                  </td>
                ) : (
                  <td>
                    {s.errorEventCount}
                    <span> </span>
                    <a href={s.extentionUrl} target="_blank">
                      Go to CC
                    </a>
                  </td>
                )}
                <td>{s.currentSequenceNumber > -1 ? "true" : "false"}</td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default CustomerExtensionQueues;
