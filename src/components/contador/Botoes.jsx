/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
// import './Contador.css';

import React from 'react';

export default props => {
    return (
        <div>
            <button onClick={props.setInc}>+</button>
            <button onClick={props.setDec}>-</button>
        </div>
    );
};