import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.css';
import ExtensionQueue from './components/extensionQueueDashboard';
//import logo from '../public/logo192.png';
//<img src={logo} width="100" height="50"></img>
//ReactDOM.render(element, document.getElementById('root'));
const root = ReactDOM.createRoot(document.getElementById("root"));
const autoRefresh = () => {setTimeout(() => {window.location.reload(1)}, 200000)};

let customerEnvironment = "Test";
//const customers = ["Megaflis","Indeks Retail A/S","Clas Ohlson AB","Finja AB","Babyworld AB"];
//const customers = ["Megaflis","Babyworld AB","Megaflis","Babyworld AB","Megaflis","Babyworld AB","Megaflis","Babyworld AB"];
const customers = ["Ahlens AB","Babyworld AB","Birkenstock GmbH","Clas Ohlson AB","Finja AB","Fisher and Paykel","Hills Ltd","HTS Group","HTS Hans Torgersen","Indeks Retail AS","Megaflis","Menigo Foods", "Moelven Industrier"];

root.render(
    <React.StrictMode>   
        {autoRefresh()};   
        <div class="container">
            <div class="row horizontal-center-row">
            <div class="headerDiv">           
                <span>INNOVATE WEB DASHBOARD MONITORING TOOL</span>          
            </div>
                {customers.map((c) => 
                <ExtensionQueue customerName={c} customerEnvironment={customerEnvironment}/>
                )}
            </div>
        </div>
    </React.StrictMode>
);
