import React from 'react';

import './SideDrawer.css';

const sideDrawer = props =>(
    <nav className="side-drawer">
        <ul>
            <li><a href="/">Home</a></li>    
            <li><a href="/">Reporting</a></li>
            <li><a href="/">Quarantine Report</a></li> 
                   
        </ul> 
    </nav>
);
export default sideDrawer;