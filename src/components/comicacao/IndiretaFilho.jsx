/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import React from 'react';

export default props => {

    const callback = props.quandoClicar
    const min = 50;
    const max = 70;
    const generateAge = () => parseInt(Math.random() * (max - min)) + min;
    const generateIsGeek = () => Math.random() > 0.5
    
    return (
        <div>
            <div>
                Filho
            </div>
            <button onClick={ _ => callback('João', generateAge(), generateIsGeek()) }>
                Fornecer Informações
            </button>
        </div>
    );
};