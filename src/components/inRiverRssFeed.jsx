import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/extensionQueue.css'
import '../css/inRiverRssQueue.css'

const InRiverRssFeed = () => {
    const[rssActiveIncidents, setActiveIncidents] = useState([])
    const[rssCurrentStatus, setCurrentStatus] = useState([])
    const [loading, setLoading] = useState(false);

    const getRssFeed = async () => {
        //let statisticsUrl = "https://nitroconnector.azurewebsites.net/ExtensionQueue/GetExtensionQueue/4d57e8b329cd33f8ed28c3d2e622c400&4f35c0fab0695eedb8bdc15ff5b1a035&EpiConnector;CVLListener";
        //let statisticsUrl = "https://avensia-im-pim-nitroconnector-dev.azurewebsites.net/ExtensionQueue/GetStatQueues/" + props.customerName + "/" + props.customerEnvironment;
        //for locally run backend
        let inRiverRssUrl = "https://localhost:44378/ExtensionQueue/GetInRiverStatusRR";
        let request = {
            method: "get",
            url: inRiverRssUrl
        };
    
        await axios(request)
        .then(res => {
            console.log(res);
            setActiveIncidents(res.data.data.active_incident_details);
            setCurrentStatus(res.data.data.current_status);
            setLoading(true);
        })
        .catch(err => {
            alert(err.message);
        })  
    }

    useEffect(() => {
        getRssFeed();
    }, []);

    return (  
        <React.Fragment>
            {loading == true ?
                <table class="table">
                <thead>   
                    <h5>INRIVER RSS FEED</h5>
                </thead>
                <tbody>
                    <tr>
                        <td><b>Title</b></td>
                        <td><b>Startdate</b></td>
                        <td><b>Description</b></td>
                        <td><b>Severity</b></td>
                    </tr>  
                    {rssActiveIncidents.map(s => 
                    <React.Fragment>
                        <tr>
                            <td>{s.incident_title}</td>
                            <td>{s.incident_began_at}</td>
                            <td>{s.incident_desc}</td>
                            <td>{s.incident_severity_id}</td>
                        </tr>   
                    </React.Fragment>
                    ) }
                    {rssCurrentStatus.map(c => 
                    <React.Fragment>                    
                        <tr>
                            {c.componentgroup_components.length > 0 ?
                            <table class="currStatusTable">
                                <tr>                                
                                    <th>
                                        {c.componentgroup_display_name}
                                    </th>
                                </tr>
                                <tr>
                                    <th>Inriver Module</th>
                                    <th>Status</th>
                                    <th>Description</th>
                                </tr> 
                                {c.componentgroup_components.map(cc =>                                  
                                <tr>
                                    <td>{cc.display_name}</td>
                                    <td>{cc.component_status}</td>
                                    <td>{cc.component_status_desc}</td>
                                </tr>                                                                  
                                ) }                                                                                                                     
                            </table> :  
                                    <div> 
                                        <h5>{c.componentgroup_display_name}</h5> There's no current active incidents.
                                    </div>
                            }
                        </tr>                                        
                    </React.Fragment>
                    ) }
                </tbody>                
                </table> : null
            }
        </React.Fragment>
    );
}
 
export default InRiverRssFeed;