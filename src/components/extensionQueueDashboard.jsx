import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Col, Row} from 'react-bootstrap';
import '../css/extensionQueue.css'

const ExtensionQueue = (props) => {
    const [stats, getQueueStatistics] = useState([]);
    const [loading, setLoading] = useState(false);

    const getStatistics = async () => {
        //let statisticsUrl = "https://nitroconnector.azurewebsites.net/ExtensionQueue/GetExtensionQueue/4d57e8b329cd33f8ed28c3d2e622c400&4f35c0fab0695eedb8bdc15ff5b1a035&EpiConnector;CVLListener";
        let statisticsUrl = "https://avensia-im-pim-nitroconnector-dev.azurewebsites.net/ExtensionQueue/GetStatQueues/" + props.customerName + "/" + props.customerEnvironment;
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
                <div class="column">
                <table>
                    <thead>
                        <tr><span class="">{props.customerName}</span></tr>
                        <tr>
                        <th>Extension</th>
                        <th>Queue<span>(Extension Stats)</span></th>
                        <th>Error<span>(Extension Stats)</span></th>        
                        <th>Running<span>(Extension Stats)</span></th>
                        </tr>
                    </thead>
                    <tbody>
                {loading && stats.map(s => 
                <tr>
                <td>{s.extension}</td>
                <td>{s.queuedEventCount}</td>
                <td>{s.errorEventCount}</td>
                <td>{(s.currentSequenceNumber > -1) ? 'true' : 'false'}</td>
                </tr>)
                }
                </tbody>
                </table>  
                </div>              
            </React.Fragment>
        );
    
    }
 
export default ExtensionQueue;