/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import React from 'react';

export default props => {
    return (
        <div>
            <span>{ props.name } </span>
            <span><strong>{ props.age }</strong> </span>
            <span>{ props.isGeek ? 'Verdadeiro' : 'Falso' }!</span>
        </div>
    );
};