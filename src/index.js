import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./css/index.css";
import ExtensionQueuePlain from "./components/extensionQueueDashboardPlain";
import InRiverRssFeed from "./components/inRiverRssFeed";
import InriverLogo from "./images/Inriver_logo.png";
import AvensiaLogo from "./images/avensia_logo.png";

const root = ReactDOM.createRoot(document.getElementById("root"));
let customerEnvironment = "Test";

const backgroundStyle = {
  backgroundImage: 'linear-gradient(to right top, #134897, #173886, #1a2874, #1a1763, #190551)',
  paddingBottom:30 
}

const mainLogoFiller = {
  marginTop: 20
}
root.render(
  <React.StrictMode>
    <div class="row" style={backgroundStyle}>
      <div class="col-sm-4" >
        <img src={AvensiaLogo} class="avensiaLogoImg" alt=" " />
      </div>
      <div class="col-sm-8" style={mainLogoFiller}>
        <span id="mainLogo">Support Web Monitoring Tool</span>
      </div>
    </div> 
    <div class="row">
      <div class="col-md-3">
        <img src={InriverLogo} class="inRiverLogoImg" alt=" " />
        <span class="componentLabel">RSS FEED</span>
        <InRiverRssFeed />
      </div>
      <div class="col-md-9">
        <img src={InriverLogo} class="inRiverLogoImg" alt=" " />
        <span class="componentLabel">EXTENSION QUEUES</span>        
        <ExtensionQueuePlain customerEnvironment={customerEnvironment} />               
      </div>
    </div>
  </React.StrictMode>
);
