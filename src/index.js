import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import ExtensionQueue from "./components/extensionQueueDashboard";
import InRiverRssFeed from "./components/inRiverRssFeed";

const root = ReactDOM.createRoot(document.getElementById("root"));
let customerEnvironment = "Test";

root.render(
  <React.StrictMode>
    <div class="row">
      <div class="col-md-3">
        <h5>** INRIVER RSS **</h5>
        <InRiverRssFeed />
      </div>
      <div class="col-md-9">
        <h5>** EXTENSION QUEUES **</h5>
        <ExtensionQueue customerEnvironment={customerEnvironment} />
      </div>
    </div>
  </React.StrictMode>
);
