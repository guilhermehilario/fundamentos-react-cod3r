/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import React from 'react';

export default props => {

    return (
        <div>
            <h3>{ props.number }</h3>
        </div>
    );
};