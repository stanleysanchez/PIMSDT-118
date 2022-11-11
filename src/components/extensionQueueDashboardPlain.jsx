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
  const [stats14, getQueueStatistics14] = useState([]);
  const [stats15, getQueueStatistics15] = useState([]);
  const [stats16, getQueueStatistics16] = useState([]);
  const [stats17, getQueueStatistics17] = useState([]);
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
  const [loading14, setLoading14] = useState(false);
  const [loading15, setLoading15] = useState(false);
  const [loading16, setLoading16] = useState(false);
  const [loading17, setLoading17] = useState(false);
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
  const [isOverThreshold14, checkThreshold14] = useState([false]);
  const [isOverThreshold15, checkThreshold15] = useState([false]);
  const [isOverThreshold16, checkThreshold16] = useState([false]);
  const [isOverThreshold17, checkThreshold17] = useState([false]);

  const errorthreshold = 20;
  const customer1 = "Ahlens AB";
  const customer2 = "Babyworld AB";
  const customer3 = "Birkenstock GmbH";
  const customer4 = "Clas Ohlson AB";
  const customer5 = "Finja AB";
  const customer6 = "Fisher and Paykel";
  const customer7 = "GWA International";
  const customer8 = "HTS Group";
  const customer9 = "HTS Hans Torgersen";
  const customer10 = "Indeks Retail AS";
  const customer11 = "Kid ASA";
  const customer12 = "Megaflis";
  const customer13 = "Menigo Foods";
  const customer14 = "Moelven Industrier";
  const customer15 = "Purefun";
  const customer16 = "Stenstroms Skjortfabrik AB";
  const customer17 = "Weatherbeeta";

  const [showErrorOnly, setShowErrorOnly] = useState(false);

  const getStatistics = async (custName) => {
    //for locally run backend
    //"https://localhost:44378/ExtensionQueue/GetStatQueues/"
    //for azure service backend
    //"https://avensia-im-pim-support-api-monitoring-tool.azurewebsites.net/ExtensionQueue/GetStatQueues/" - .net core 3.1
    //"https://im-pim-support-api-monitoring-tool.azurewebsites.net/ExtensionQueue/GetStatQueues/" - .net 6
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
        if (custName == customer1) {
          getQueueStatistics1(res.data);
          setLoading1(true);
          checkErrorThreshold(custName, res.data);
          console.log(customer1);
          console.log(res.data);
        }
        if (custName == customer2) {
          getQueueStatistics2(res.data);
          setLoading2(true);
          checkErrorThreshold(custName, res.data);
          console.log(customer2);
          console.log(res.data);
        }
        if (custName == customer3) {
          getQueueStatistics3(res.data);
          setLoading3(true);
          checkErrorThreshold(custName, res.data);
          console.log(customer3);
          console.log(res.data);
        }
        if (custName == customer4) {
          getQueueStatistics4(res.data);
          setLoading4(true);
          checkErrorThreshold(custName, res.data);
          console.log(customer4);
          console.log(res.data);
        }
        if (custName == customer5) {
          getQueueStatistics5(res.data);
          setLoading5(true);
          checkErrorThreshold(custName, res.data);
          console.log(customer5);
          console.log(res.data);
        }
        if (custName == customer6) {
          getQueueStatistics6(res.data);
          setLoading6(true);
          checkErrorThreshold(custName, res.data);
          console.log(customer6);
          console.log(res.data);
        }
        if (custName == customer7) {
          getQueueStatistics7(res.data);
          setLoading7(true);
          checkErrorThreshold(custName, res.data);
          console.log(customer7);
          console.log(res.data);
        }
        if (custName == customer8) {
          getQueueStatistics8(res.data);
          setLoading8(true);
          checkErrorThreshold(custName, res.data);
          console.log(customer8);
          console.log(res.data);
        }
        if (custName == customer9) {
          getQueueStatistics9(res.data);
          setLoading9(true);
          checkErrorThreshold(custName, res.data);
          console.log(customer9);
          console.log(res.data);
        }
        if (custName == customer10) {
          getQueueStatistics10(res.data);
          setLoading10(true);
          checkErrorThreshold(custName, res.data);
          console.log(customer10);
          console.log(res.data);
        }
        if (custName == customer11) {
          getQueueStatistics11(res.data);
          setLoading11(true);
          checkErrorThreshold(custName, res.data);
          console.log(customer11);
          console.log(res.data);
        }
        if (custName == customer12) {
          getQueueStatistics12(res.data);
          setLoading12(true);
          checkErrorThreshold(custName, res.data);
          console.log(customer12);
          console.log(res.data);
        }
        if (custName == customer13) {
          getQueueStatistics13(res.data);
          setLoading13(true);
          checkErrorThreshold(custName, res.data);
          console.log(customer13);
          console.log(res.data);
        }
        if (custName == customer14) {
          getQueueStatistics14(res.data);
          setLoading14(true);
          checkErrorThreshold(custName, res.data);
          console.log(customer14);
          console.log(res.data);
        }
        if (custName == customer15) {
          getQueueStatistics15(res.data);
          setLoading15(true);
          checkErrorThreshold(custName, res.data);
          console.log(customer15);
          console.log(res.data);
        }
        if (custName == customer16) {
          getQueueStatistics16(res.data);
          setLoading16(true);
          checkErrorThreshold(custName, res.data);
          console.log(customer16);
          console.log(res.data);
        }
        if (custName == customer17) {
          getQueueStatistics17(res.data);
          setLoading17(true);
          checkErrorThreshold(custName, res.data);
          console.log(customer17);
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
    props.custList.map((c) => getStatistics(c));
  };

  const toggleExtensionView = () => {
    setShowErrorOnly(!showErrorOnly);
    console.log("toggle view");
    props.custList.map((c) => getStatistics(c));
  };

  const checkErrorThreshold = (custName, stats) => {
    let hasOverErrorThreshold = false;

    for (var i = 0; i < stats.length; i++) {
      if (stats[i].errorEventCount > errorthreshold) {
        hasOverErrorThreshold = true;
        break;
      }
    }

    switch (custName) {
      case customer1:
        checkThreshold1(hasOverErrorThreshold);
        break;
      case customer2:
        checkThreshold2(hasOverErrorThreshold);
        break;
      case customer3:
        checkThreshold3(hasOverErrorThreshold);
        break;
      case customer4:
        checkThreshold4(hasOverErrorThreshold);
        break;
      case customer5:
        checkThreshold5(hasOverErrorThreshold);
        break;
      case customer6:
        checkThreshold6(hasOverErrorThreshold);
        break;
      case customer7:
        checkThreshold7(hasOverErrorThreshold);
        break;
      case customer8:
        checkThreshold8(hasOverErrorThreshold);
        break;
      case customer9:
        checkThreshold9(hasOverErrorThreshold);
        break;
      case customer10:
        checkThreshold10(hasOverErrorThreshold);
        break;
      case customer11:
        checkThreshold11(hasOverErrorThreshold);
        break;
      case customer12:
        checkThreshold12(hasOverErrorThreshold);
        break;
      case customer13:
        checkThreshold13(hasOverErrorThreshold);
        break;
      case customer14:
        checkThreshold14(hasOverErrorThreshold);
        break;
      case customer15:
        checkThreshold15(hasOverErrorThreshold);
        break;
      case customer16:
        checkThreshold16(hasOverErrorThreshold);
        break;
      case customer17:
        checkThreshold17(hasOverErrorThreshold);
        break;
    }
  };

  useEffect(() => {
    initiateCall();
  }, []);
  return (
    <React.Fragment>
      <br></br>
      <span class="errorThreshold">
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
        <CustomerExtensionQueues stats={stats1} customerName={customer1} />
      ) : null}
      {loading2 == true &&
      stats2.length > 0 &&
      (isOverThreshold2 || !showErrorOnly) ? (
        <CustomerExtensionQueues stats={stats2} customerName={customer2} />
      ) : null}
      {loading3 == true &&
      stats3.length > 0 &&
      (isOverThreshold3 || !showErrorOnly) ? (
        <CustomerExtensionQueues stats={stats3} customerName={customer3} />
      ) : null}
      {loading4 == true &&
      stats4.length > 0 &&
      (isOverThreshold4 || !showErrorOnly) ? (
        <CustomerExtensionQueues stats={stats4} customerName={customer4} />
      ) : null}
      {loading5 == true &&
      stats5.length > 0 &&
      (isOverThreshold5 || !showErrorOnly) ? (
        <CustomerExtensionQueues stats={stats5} customerName={customer5} />
      ) : null}
      {loading6 == true &&
      stats6.length > 0 &&
      (isOverThreshold6 || !showErrorOnly) ? (
        <CustomerExtensionQueues stats={stats6} customerName={customer6} />
      ) : null}
      {loading7 == true &&
      stats7.length > 0 &&
      (isOverThreshold7 || !showErrorOnly) ? (
        <CustomerExtensionQueues stats={stats7} customerName={customer7} />
      ) : null}
      {loading8 == true &&
      stats8.length > 0 &&
      (isOverThreshold8 || !showErrorOnly) ? (
        <CustomerExtensionQueues stats={stats8} customerName={customer8} />
      ) : null}
      {loading9 == true &&
      stats9.length > 0 &&
      (isOverThreshold9 || !showErrorOnly) ? (
        <CustomerExtensionQueues stats={stats9} customerName={customer9} />
      ) : null}
      {loading10 == true &&
      stats10.length > 0 &&
      (isOverThreshold10 || !showErrorOnly) ? (
        <CustomerExtensionQueues stats={stats10} customerName={customer10} />
      ) : null}
      {loading11 == true &&
      stats11.length > 0 &&
      (isOverThreshold11 || !showErrorOnly) ? (
        <CustomerExtensionQueues stats={stats11} customerName={customer11} />
      ) : null}
      {loading12 == true &&
      stats12.length > 0 &&
      (isOverThreshold12 || !showErrorOnly) ? (
        <CustomerExtensionQueues stats={stats12} customerName={customer12} />
      ) : null}
      {loading13 == true &&
      stats13.length > 0 &&
      (isOverThreshold13 || !showErrorOnly) ? (
        <CustomerExtensionQueues stats={stats13} customerName={customer13} />
      ) : null}
      {loading14 == true &&
      stats14.length > 0 &&
      (isOverThreshold14 || !showErrorOnly) ? (
        <CustomerExtensionQueues stats={stats14} customerName={customer14} />
      ) : null}
      {loading15 == true &&
      stats15.length > 0 &&
      (isOverThreshold15 || !showErrorOnly) ? (
        <CustomerExtensionQueues stats={stats15} customerName={customer15} />
      ) : null}
      {loading16 == true &&
      stats16.length > 0 &&
      (isOverThreshold16 || !showErrorOnly) ? (
        <CustomerExtensionQueues stats={stats16} customerName={customer16} />
      ) : null}
      {loading17 == true &&
      stats17.length > 0 &&
      (isOverThreshold17 || !showErrorOnly) ? (
        <CustomerExtensionQueues stats={stats17} customerName={customer17} />
      ) : null}
    </React.Fragment>
  );
};

export default ExtensionQueuePlain;
