import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "../css/inRiverRssQueue.css";

const InRiverRssFeed = () => {
  const [rssCurrentStatus, setCurrentStatus] = useState([]);

  const getRssFeed = async () => {
    //let statisticsUrl = "https://nitroconnector.azurewebsites.net/ExtensionQueue/GetExtensionQueue/4d57e8b329cd33f8ed28c3d2e622c400&4f35c0fab0695eedb8bdc15ff5b1a035&EpiConnector;CVLListener";
    //for locally run backend
    //for azure service backend
    //"https://avensia-im-pim-support-api-monitoring-tool.azurewebsites.net/ExtensionQueue/GetInRiverStatusRR"; - .net core 3.1
    //"https://im-pim-support-api-monitoring-tool.azurewebsites.net/ExtensionQueue/GetInRiverStatusRR"; - .net 6
    let inRiverRssUrl =
      "https://im-pim-support-api-monitoring-tool.azurewebsites.net/ExtensionQueue/GetInRiverStatusRR";
    let request = {
      method: "get",
      url: inRiverRssUrl,
    };

    await axios(request)
      .then((res) => {
        console.log(res);
        setCurrentStatus(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const initiateRssFeed = () => {
    setTimeout(initiateRssFeed, 30000);
    console.log("triggering RssFeed");
    getRssFeed();
  };

  useEffect(() => {
    //getRssFeed();
    initiateRssFeed();
  }, []);

  return (
    <React.Fragment>
      <table class="container">
        <tbody>
          {rssCurrentStatus.map((c) =>
            c.includes("Europe") ? (
              <React.Fragment>
                <tr>{c}</tr>
              </React.Fragment>
            ) : null
          )}
        </tbody>
      </table>
      <br></br>
      <table class="container">
        <tbody>
        {rssCurrentStatus.map((c) =>
          c.includes("US") ? (
            <React.Fragment>
              <tr>{c}</tr>
            </React.Fragment>
          ) : null
        )}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default InRiverRssFeed;
