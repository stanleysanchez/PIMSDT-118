import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "../css/extensionQueue.css";
import CustomerExtensionQueues from "./customerExtensionQueues";

const ExtensionQueuePlain = (props) => {
  const [stats1, getQueueStatistics1] = useState([]);
  const [stats2, getQueueStatistics2] = useState([]);
  const [stats3, getQueueStatistics3] = useState([]);
  const [stats4, getQueueStatistics4] = useState([]);
  const [stats5, getQueueStatistics5] = useState([]);
  const [stats6, getQueueStatistics6] = useState([]);
  const [stats7, getQueueStatistics7] = useState([]);
  const [stats8, getQueueStatistics8] = useState([]);
  const [stats9, getQueueStatistics9] = useState([]);
  const [stats10, getQueueStatistics10] = useState([]);
  const [stats11, getQueueStatistics11] = useState([]);
  const [stats12, getQueueStatistics12] = useState([]);
  const [stats13, getQueueStatistics13] = useState([]);
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [loading3, setLoading3] = useState(false);
  const [loading4, setLoading4] = useState(false);
  const [loading5, setLoading5] = useState(false);
  const [loading6, setLoading6] = useState(false);
  const [loading7, setLoading7] = useState(false);
  const [loading8, setLoading8] = useState(false);
  const [loading9, setLoading9] = useState(false);
  const [loading10, setLoading10] = useState(false);
  const [loading11, setLoading11] = useState(false);
  const [loading12, setLoading12] = useState(false);
  const [loading13, setLoading13] = useState(false);
  const [isOverThreshold1, checkThreshold1] = useState([false]);
  const [isOverThreshold2, checkThreshold2] = useState([false]);
  const [isOverThreshold3, checkThreshold3] = useState([false]);
  const [isOverThreshold4, checkThreshold4] = useState([false]);
  const [isOverThreshold5, checkThreshold5] = useState([false]);
  const [isOverThreshold6, checkThreshold6] = useState([false]);
  const [isOverThreshold7, checkThreshold7] = useState([false]);
  const [isOverThreshold8, checkThreshold8] = useState([false]);
  const [isOverThreshold9, checkThreshold9] = useState([false]);
  const [isOverThreshold10, checkThreshold10] = useState([false]);
  const [isOverThreshold11, checkThreshold11] = useState([false]);
  const [isOverThreshold12, checkThreshold12] = useState([false]);
  const [isOverThreshold13, checkThreshold13] = useState([false]);
  const [showErrorOnly, setShowErrorOnly] = useState(false);

  const errorthreshold = 10;
  const alhens = "Ahlens AB";
  const babyworld = "Babyworld AB";
  const birkenstockgmbh = "Birkenstock GmbH";
  const clasohlsonab = "Clas Ohlson AB";
  const finjaab = "Finja AB";
  const fisherandpaykel = "Fisher and Paykel";
  const hillsltd = "Hills Ltd";
  const htsgroup = "HTS Group";
  const htshanstorgersen = "HTS Hans Torgersen";
  const indeksretailas = "Indeks Retail AS";
  const megaflis = "Megaflis";
  const menigofoods = "Menigo Foods";
  const moelvenindustries = "Moelven Industrier";

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
  
  const getStatistics = async (custName) => {
    //for locally run backend
    //"https://localhost:44378/ExtensionQueue/GetStatQueues/"
    //for azure service backend
    //"https://avensia-im-pim-support-api-monitoring-tool.azurewebsites.net/ExtensionQueue/GetStatQueues/"
    let statisticsUrl =
      "https://localhost:44378/ExtensionQueue/GetStatQueues/" +
      custName +
      "/" +
      props.customerEnvironment;
    let request = {
      method: "get",
      url: statisticsUrl,
    };

    await axios(request)
      .then((res) => {
        if (custName == "Ahlens AB") {
          getQueueStatistics1(res.data);
          setLoading1(true);
          checkErrorThreshold(custName, res.data);
          console.log("Ahlens AB");
          console.log(res.data);
        }
        if (custName == "Babyworld AB") {
          getQueueStatistics2(res.data);
          setLoading2(true);
          checkErrorThreshold(custName, res.data);
          console.log("Babyworld AB");
          console.log(res.data);
        }
        if (custName == "Birkenstock GmbH") {
          getQueueStatistics3(res.data);
          setLoading3(true);
          checkErrorThreshold(custName, res.data);
          console.log("Birkenstock GmbH");
          console.log(res.data);
        }
        if (custName == "Clas Ohlson AB") {
          getQueueStatistics4(res.data);
          setLoading4(true);
          checkErrorThreshold(custName, res.data);
          console.log("Clas Ohlson AB");
          console.log(res.data);
        }
        if (custName == "Finja AB") {
          getQueueStatistics5(res.data);
          setLoading5(true);
          checkErrorThreshold(custName, res.data);
          console.log("Finja AB");
          console.log(res.data);
        }
        if (custName == "Fisher and Paykel") {
          getQueueStatistics6(res.data);
          setLoading6(true);
          checkErrorThreshold(custName, res.data);
          console.log("Fisher and Paykel");
          console.log(res.data);
        }
        if (custName == "Hills Ltd") {
          getQueueStatistics7(res.data);
          setLoading7(true);
          checkErrorThreshold(custName, res.data);
          console.log("Hills Ltd");
          console.log(res.data);
        }
        if (custName == "HTS Group") {
          getQueueStatistics8(res.data);
          setLoading8(true);
          checkErrorThreshold(custName, res.data);
          console.log("HTS Group");
          console.log(res.data);
        }
        if (custName == "HTS Hans Torgersen") {
          getQueueStatistics9(res.data);
          setLoading9(true);
          checkErrorThreshold(custName, res.data);
          console.log("HTS Hans Torgersen");
          console.log(res.data);
        }
        if (custName == "Indeks Retail AS") {
          getQueueStatistics10(res.data);
          setLoading10(true);
          checkErrorThreshold(custName, res.data);
          console.log("Indeks Retail AS");
          console.log(res.data);
        }
        if (custName == "Megaflis") {
          getQueueStatistics11(res.data);
          setLoading11(true);
          checkErrorThreshold(custName, res.data);
          console.log("Megaflis");
          console.log(res.data);
        }
        if (custName == "Menigo Foods") {
          getQueueStatistics12(res.data);
          setLoading12(true);
          checkErrorThreshold(custName, res.data);
          console.log("Menigo Foods");
          console.log(res.data);
        }
        if (custName == "Moelven Industrier") {
          getQueueStatistics13(res.data);
          setLoading13(true);
          checkErrorThreshold(custName, res.data);
          console.log("Moelven Industrier");
          console.log(res.data);
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const initiateCall = () => {
    setTimeout(initiateCall, 60000);
    console.log("triggering initiatecall");
    custList.map((c) => getStatistics(c));
  };

  const toggleExtensionView = () => {
    setShowErrorOnly(!showErrorOnly);
    console.log("toggle view");
    custList.map((c) => getStatistics(c));
  };

  const checkErrorThreshold = (custName, stats) => {
    let hasOverErrorThreshold = false;

    for (var i = 0; i < stats.length; i++) {
      if (c.errorEventCount > 10) {
        hasOverErrorThreshold = true;
        break;
      }
    }

    switch (custName) {
      case alhens:
        checkThreshold1(hasOverErrorThreshold);
        break;
      case babyworld:
        checkThreshold2(hasOverErrorThreshold);
        break;
      case birkenstockgmbh:
        checkThreshold3(hasOverErrorThreshold);
        break;
      case clasohlsonab:
        checkThreshold4(hasOverErrorThreshold);
        break;
      case finjaab:
        checkThreshold5(hasOverErrorThreshold);
        break;
      case fisherandpaykel:
        checkThreshold6(hasOverErrorThreshold);
        break;
      case hillsltd:
        checkThreshold7(hasOverErrorThreshold);
        break;
      case htsgroup:
        checkThreshold8(hasOverErrorThreshold);
        break;
      case htshanstorgersen:
        checkThreshold9(hasOverErrorThreshold);
        break;
      case indeksretailas:
        checkThreshold10(hasOverErrorThreshold);
        break;
      case megaflis:
        checkThreshold11(hasOverErrorThreshold);
        break;
      case menigofoods:
        checkThreshold12(hasOverErrorThreshold);
        break;
      case moelvenindustries:
        checkThreshold13(hasOverErrorThreshold);
        break;
    }
  };

  useEffect(() => {
    initiateCall();
  }, []);
  return (
    <React.Fragment>
      <br></br>
      <span class="label label-primary">
        <input
          type="checkbox"
          defaultChecked={showErrorOnly}
          onChange={() => toggleExtensionView()}
        />{" "}
        Customer's Over Error Threshold
      </span>
      {loading1 == true &&
      stats1.length > 0 &&
      (isOverThreshold1 || !showErrorOnly) ? (
        <CustomerExtensionQueues stats={stats1} customerName="Ahlens AB" />
      ) : null}
      {loading2 == true &&
      stats2.length > 0 &&
      (isOverThreshold2 || !showErrorOnly) ? (
        <CustomerExtensionQueues stats={stats2} customerName="Babyworld AB" />
      ) : null}
      {loading3 == true &&
      stats3.length > 0 &&
      (isOverThreshold3 || !showErrorOnly) ? (
        <CustomerExtensionQueues stats={stats3} customerName="Birkenstock GmbH"
        />
      ) : null}
      {loading4 == true &&
      stats4.length > 0 &&
      (isOverThreshold4 || !showErrorOnly) ? (
        <CustomerExtensionQueues stats={stats4} customerName="Clas Ohlson AB" />
      ) : null}
      {loading5 == true &&
      stats5.length > 0 &&
      (isOverThreshold5 || !showErrorOnly) ? (
        <CustomerExtensionQueues stats={stats5} customerName="Finja AB" />
      ) : null}
      {loading6 == true &&
      stats6.length > 0 &&
      (isOverThreshold6 || !showErrorOnly) ? (
        <CustomerExtensionQueues stats={stats6} customerName="Fisher and Paykel" />
      ) : null}
      {loading7 == true &&
      stats7.length > 0 &&
      (isOverThreshold7 || !showErrorOnly) ? (
        <CustomerExtensionQueues stats={stats7} customerName="Hills Ltd" />
      ) : null}
      {loading8 == true &&
      stats8.length > 0 &&
      (isOverThreshold8 || !showErrorOnly) ? (
        <CustomerExtensionQueues stats={stats8} customerName="HTS Group" />
      ) : null}
      {loading9 == true &&
      stats9.length > 0 &&
      (isOverThreshold9 || !showErrorOnly) ? (
        <CustomerExtensionQueues stats={stats9} customerName="HTS Hans Torgersen" />
      ) : null}
      {loading10 == true &&
      stats10.length > 0 &&
      (isOverThreshold10 || !showErrorOnly) ? (
        <CustomerExtensionQueues stats={stats10} customerName="Indeks Retail AS" />
      ) : null}
      {loading11 == true &&
      stats11.length > 0 &&
      (isOverThreshold11 || !showErrorOnly) ? (
        <CustomerExtensionQueues stats={stats11} customerName="Megaflis" />
      ) : null}
      {loading12 == true &&
      stats12.length > 0 &&
      (isOverThreshold12 || !showErrorOnly) ? (
        <CustomerExtensionQueues stats={stats12} customerName="Menigo Foods" />
      ) : null}
      {loading13 == true &&
      stats13.length > 0 &&
      (isOverThreshold13 || !showErrorOnly) ? (
        <CustomerExtensionQueues stats={stats13} customerName="Moelven Industrier" />
      ) : null}
    </React.Fragment>
  );
};

export default ExtensionQueuePlain;
