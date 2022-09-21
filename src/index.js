import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.css';
import ExtensionQueue from './components/extensionQueueDashboard';


//ReactDOM.render(element, document.getElementById('root'));
const root = ReactDOM.createRoot(document.getElementById("root"));

let customerEnvironment = "Test";
const customers = ["Megaflis","Megaflis","Megaflis"];

root.render(
    <React.StrictMode>
{customers.map((c) => 
        <ExtensionQueue customerName={c} customerEnvironment={customerEnvironment}/>
)}
    </React.StrictMode>
);
