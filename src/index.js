import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.css';
import ExtensionQueue from './components/extensionQueueDashboard';
import InRiverRssFeed from './components/inRiverRssFeed';
//import logo from '../public/logo192.png';
//<img src={logo} width="100" height="50"></img>
//ReactDOM.render(element, document.getElementById('root'));    {autoRefresh()};   
const root = ReactDOM.createRoot(document.getElementById("root"));
const autoRefresh = () => {setTimeout(() => {window.location.reload(1)}, 200000)};

let customerEnvironment = "Test";
//const customers = ["Megaflis","Indeks Retail A/S","Clas Ohlson AB","Finja AB","Babyworld AB"];
//const customers = ["Megaflis","Babyworld AB","Megaflis","Babyworld AB","Megaflis","Babyworld AB","Megaflis","Babyworld AB"];
const customers = ["Ahlens AB","Babyworld AB","Birkenstock GmbH","Clas Ohlson AB","Finja AB","Fisher and Paykel","Hills Ltd","HTS Group","HTS Hans Torgersen","Indeks Retail AS","Megaflis","Menigo Foods", "Moelven Industrier"];
const errorPerCustomer = [];
//const customerErrorsTotal = (stats) => {} 
root.render(
    <React.StrictMode>          
        <div class="container-fluid">
            <div class="headerDiv">           
                <span>INNOVATE WEB DASHBOARD MONITORING TOOL</span>                          
            </div>
            <div class="container">
                <InRiverRssFeed />
            </div>
            <div class="container">           
                {customers.map((c) => 
                    <ExtensionQueue customerName={c} customerEnvironment={customerEnvironment}/>
                )}                
            </div>           
        </div>
    </React.StrictMode>
);
