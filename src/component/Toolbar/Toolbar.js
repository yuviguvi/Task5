import React from 'react';
import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {faMapMarker} from '@fortawesome/free-solid-svg-icons';

const toolbar = props =>(
    <header className="toolbar">
        <nav className="toolbar_navigation">
                <input type="checkbox" id="check" />
                <label for="check" class="checkbtn">
                <span><FontAwesomeIcon icon={faBars} /></span>
                </label>
                <label class="toolbar_logo">Covid-19 Dashboard</label>
                <ul>
                    <li><a class="active" href="#"><span><FontAwesomeIcon icon={faHome} /></span>Home</a></li>
                    <li><a href="#">Reporting</a></li>
                    <li><a href="#">Quarantine Report</a></li>
                    <li><a href="#">Test Result</a></li>
                    <li><a href="#">Food Distribution</a></li>
                    <li><a href="#">Voilation of Lockdown</a></li>
                    <li><a href="#">Essential Commodities</a></li>
                    <li><a href="#">BPL Rice Distribution</a></li>
                    <li><a href="#"><span><FontAwesomeIcon icon={ faMapMarker} /></span>Containment Zone</a></li>
                    <div id="log">ADMINISTRATION</div>
                    <li><a href="#">Login</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Disclaimer</a></li>
                    <div id="log">USEFUL LINKS</div>
                    <li><a href="#">Advisories</a></li>
                    <li><a href="#">E-Pass</a></li>
                   
                </ul> 
        </nav>
    </header>
);

export default toolbar;
