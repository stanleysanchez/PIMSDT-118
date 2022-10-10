import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "../css/extensionQueue.css";
import CustomerExtensionQueues from "./customerExtensionQueues";
import Carousel from "react-bootstrap/Carousel";

const ExtensionQueue = (props) => {
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
    //let statisticsUrl = "https://nitroconnector.azurewebsites.net/ExtensionQueue/GetExtensionQueue/4d57e8b329cd33f8ed28c3d2e622c400&4f35c0fab0695eedb8bdc15ff5b1a035&EpiConnector;CVLListener";
    //let statisticsUrl = "https://avensia-im-pim-nitroconnector-dev.azurewebsites.net/ExtensionQueue/GetStatQueues/" + props.customerName + "/" + props.customerEnvironment;
    //for locally run backend
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
          console.log("Ahlens AB");
          console.log(res.data);
        }
        if (custName == "Babyworld AB") {
          getQueueStatistics2(res.data);
          setLoading2(true);
          console.log("Babyworld AB");
          console.log(res.data);
        }
        if (custName == "Birkenstock GmbH") {
          getQueueStatistics3(res.data);
          setLoading3(true);
          console.log("Birkenstock GmbH");
          console.log(res.data);
        }
        if (custName == "Clas Ohlson AB") {
          getQueueStatistics4(res.data);
          setLoading4(true);
          console.log("Clas Ohlson AB");
          console.log(res.data);
        }
        if (custName == "Finja AB") {
          getQueueStatistics5(res.data);
          setLoading5(true);
          console.log("Finja AB");
          console.log(res.data);
        }
        if (custName == "Fisher and Paykel") {
          getQueueStatistics6(res.data);
          setLoading6(true);
          console.log("Fisher and Paykel");
          console.log(res.data);
        }
        if (custName == "Hills Ltd") {
          getQueueStatistics7(res.data);
          setLoading7(true);
          console.log("Hills Ltd");
          console.log(res.data);
        }
        if (custName == "HTS Group") {
          getQueueStatistics8(res.data);
          setLoading8(true);
          console.log("HTS Group");
          console.log(res.data);
        }
        if (custName == "HTS Hans Torgersen") {
          getQueueStatistics9(res.data);
          setLoading9(true);
          console.log("HTS Hans Torgersen");
          console.log(res.data);
        }
        if (custName == "Indeks Retail AS") {
          getQueueStatistics10(res.data);
          setLoading10(true);
          console.log("Indeks Retail AS");
          console.log(res.data);
        }
        if (custName == "Megaflis") {
          getQueueStatistics11(res.data);
          setLoading11(true);
          console.log("Megaflis");
          console.log(res.data);
        }
        if (custName == "Menigo Foods") {
          getQueueStatistics12(res.data);
          setLoading12(true);
          console.log("Menigo Foods");
          console.log(res.data);
        }
        if (custName == "Moelven Industrier") {
          getQueueStatistics13(res.data);
          setLoading13(true);
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
  useEffect(() => {
    initiateCall();
  }, []);

  return (
    <React.Fragment>
      <Carousel interval={5000} variant="dark">
        <Carousel.Item>
          {loading1 == true && stats1.length > 0 ? (
            <CustomerExtensionQueues stats={stats1} customerName="Ahlens AB" />
          ) : null}
          {loading2 == true && stats2.length > 0 ? (
            <CustomerExtensionQueues
              stats={stats2}
              customerName="Babyworld AB"
            />
          ) : null}
          {loading3 == true && stats3.length > 0 ? (
            <CustomerExtensionQueues
              stats={stats3}
              customerName="Birkenstock GmbH"
            />
          ) : null}
          {loading4 == true && stats4.length > 0 ? (
            <CustomerExtensionQueues
              stats={stats4}
              customerName="Clas Ohlson AB"
            />
          ) : null}
        </Carousel.Item>
        <Carousel.Item>
          {loading5 == true && stats5.length > 0 ? (
            <CustomerExtensionQueues stats={stats5} customerName="Finja AB" />
          ) : null}
          {loading6 == true && stats6.length > 0 ? (
            <CustomerExtensionQueues
              stats={stats6}
              customerName="Fisher and Paykel"
            />
          ) : null}
          {loading7 == true && stats7.length > 0 ? (
            <CustomerExtensionQueues stats={stats7} customerName="Hills Ltd" />
          ) : null}
        </Carousel.Item>
        <Carousel.Item>
          {loading8 == true && stats8.length > 0 ? (
            <CustomerExtensionQueues stats={stats8} customerName="HTS Group" />
          ) : null}
          {loading9 == true && stats9.length > 0 ? (
            <CustomerExtensionQueues
              stats={stats9}
              customerName="HTS Hans Torgersen"
            />
          ) : null}
          {loading10 == true && stats10.length > 0 ? (
            <CustomerExtensionQueues
              stats={stats10}
              customerName="Indeks Retail AS"
            />
          ) : null}
        </Carousel.Item>
        <Carousel.Item>
          {loading11 == true && stats11.length > 0 ? (
            <CustomerExtensionQueues stats={stats11} customerName="Megaflis" />
          ) : null}
          {loading12 == true && stats12.length > 0 ? (
            <CustomerExtensionQueues
              stats={stats12}
              customerName="Menigo Foods"
            />
          ) : null}
          {loading13 == true && stats13.length > 0 ? (
            <CustomerExtensionQueues
              stats={stats13}
              customerName="Moelven Industrier"
            />
          ) : null}
        </Carousel.Item>
      </Carousel>
    </React.Fragment>
  );
};

export default ExtensionQueue;
