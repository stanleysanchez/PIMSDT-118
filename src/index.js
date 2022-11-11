import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./css/index.css";
import ExtensionQueuePlain from "./components/extensionQueueDashboardPlain";
import InRiverRssFeed from "./components/inRiverRssFeed";
import CustomerList from "./components/customerList";
import InriverLogo from "./images/Inriver_logo.png";
import AvensiaLogo from "./images/avensia_logo.png";

const root = ReactDOM.createRoot(document.getElementById("root"));
let customerEnvironment = "Prod";

const backgroundStyle = {
  backgroundImage:
    "linear-gradient(to right top, #134897, #173886, #1a2874, #1a1763, #190551)",
  paddingBottom: 30,
};

const mainLogoFiller = {
  marginTop: 20,
};

let custList = [
  "Ahlens AB",
  "Babyworld AB",
  "Birkenstock GmbH",
  "Clas Ohlson AB",
  "Finja AB",
  "Fisher and Paykel",
  "Hills Ltd",
  "HTS Group",
  "HTS Hans Torgersen",
  "Indeks Retail AS",
  "Megaflis",
  "Menigo Foods",
  "Moelven Industrier",
];

root.render(
  <React.StrictMode>
    <div class="row">
      <div class="col-md-3">
        <img src={InriverLogo} class="inRiverLogoImg" alt=" " />
        <span class="componentLabel">RSS FEED</span>
        <InRiverRssFeed />
      </div>
      <div class="col-md-7">
        <img src={InriverLogo} class="inRiverLogoImg" alt=" " />
        <span class="componentLabel">EXTENSION QUEUES</span>
        <ExtensionQueuePlain
          customerEnvironment={customerEnvironment}
          custList={custList}
        />
      </div>
      <div class="col-md-2">
        <CustomerList custList={custList} />
      </div>
    </div>
  </React.StrictMode>
);
