import React from 'react';

import './DrawerToggleButton.css';

const DrawerToggleButton = props => (
    <button className="toggle-button" click={props.click}>
        <div className="line" />
        <div className="line" />
        <div className="line" />
    </button>
);

export default DrawerToggleButton;