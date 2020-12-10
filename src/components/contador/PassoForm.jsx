/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import React from 'react';

export default props => {
    return (
        <div>
            <label htmlFor="passoInput">Passo: </label>
            <input id="passoInput" type="number" value={props.passo} onChange={e => props.setPasso(+e.target.value)}/>
        </div>
    );
};