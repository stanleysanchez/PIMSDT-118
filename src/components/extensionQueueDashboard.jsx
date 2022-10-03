import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/extensionQueue.css'
import { render } from '@testing-library/react';

const ExtensionQueue = (props) => {
    const [stats, getQueueStatistics] = useState([]);
    const [loading, setLoading] = useState(false);

    const getStatistics = async () => {
        //let statisticsUrl = "https://nitroconnector.azurewebsites.net/ExtensionQueue/GetExtensionQueue/4d57e8b329cd33f8ed28c3d2e622c400&4f35c0fab0695eedb8bdc15ff5b1a035&EpiConnector;CVLListener";
        //let statisticsUrl = "https://avensia-im-pim-nitroconnector-dev.azurewebsites.net/ExtensionQueue/GetStatQueues/" + props.customerName + "/" + props.customerEnvironment;
        //for locally run backend
        let statisticsUrl = "https://localhost:44378/ExtensionQueue/GetStatQueues/" + props.customerName + "/" + props.customerEnvironment;
        let request = {
            method: "get",
            url: statisticsUrl
        };
    
        await axios(request)
        .then(res => {
            console.log(res);
            getQueueStatistics(res.data)
            setLoading(true);
        })
        .catch(err => {
            alert(err.message);
        })  
    }

    useEffect(() => {
        getStatistics();
    }, []);

    return( 
            
            <React.Fragment>
                {loading == true ?
                <div class="customColumn">
                   
                <table class="table table-striped">
                    <thead>
                    
                        <tr class="customerNames">
                            <th>{props.customerName}</th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>

                    </thead>                                      
                    <tbody>
                                    
                    {loading && stats.map(s =>  
                        (s.queuedEventCount != [] || s.errorEventCount != []) ?
                            <React.Fragment>
                           <tr>
                            <th>Extension </th>
                            <th>Queue(Extension Stats) </th>
                            <th>Error(Extension Stats) </th>        
                            <th>Running(Extension Stats) </th>
                    </tr>       
                            <tr>
                                <th>{s.extension}</th>
                                <td>{s.queuedEventCount}</td>
                                <td>{s.errorEventCount}</td>
                                <td>{(s.currentSequenceNumber > -1) ? 'true' : 'false'}</td>
                            </tr>           
                            </React.Fragment> : <tr>No Errors Or Pending Queues</tr>                                                                                        
                            ) 
                        }
                    </tbody>
                </table> 
                </div> : null
                }              
            </React.Fragment>
        );   
    }
    
export default ExtensionQueue;