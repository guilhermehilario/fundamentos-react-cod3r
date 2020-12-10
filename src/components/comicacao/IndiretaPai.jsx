/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import React, { useState } from 'react';
import IndiretaFilho from './IndiretaFilho';

export default props => {

    const [name, setName ]= useState(' ? ');
    const [age, setAge ] = useState( 0 );
    const [isGeek, setIsGeek ] = useState( false );

    function fornecerInformacoes(name, age, isGeek) {
        setName(name);
        setAge(age);
        setIsGeek(isGeek);
    }

    return (
        <div>
            <div> 
                <span>{ name } </span>
                <span> <strong> { age } </strong></span>
                <span> { isGeek ? ' Ele é nerd ' : ' Ele não é nerd '}</span>
            </div>
            <IndiretaFilho quandoClicar={fornecerInformacoes}>IndiretaFilho</IndiretaFilho>
        </div>
    );
};