/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import './Mega.css';
import React, { useState } from 'react';

export default props => {

    function gerarNumerosNaocontido (min, max, arry) {
        const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min;
        
        return arry.includes(aleatorio) ? 
            gerarNumerosNaocontido(min, max, arry) :
            aleatorio
    };
    
    function gerarNumeros(quantNum) {
        const jogo = Array(quantNum)
            .fill(0)
            .reduce((nums) => {
                const newNumber = gerarNumerosNaocontido(1, 60, nums);
                return [...nums, newNumber];
            }, [])
            .sort((n1, n2) => n1 - n2)
        ;
    
        return jogo;
    };

    const [ quant, setQuant] = useState(props.quantNum || 6);
    const initialNumbers = gerarNumeros(quant);
    const [ numbers, setNumbers] = useState(initialNumbers);

    return (
        <div className='Mega'>
            <h1>Mega</h1>
            <h3>{numbers.join(' ')}</h3>
            <div>
                <label>Quantos Números</label>
                <input
                    min="6"
                    max="15" 
                    type="number" 
                    value={quant} 
                    onChange={e => {
                        setQuant(+e.target.value);
                        setNumbers(gerarNumeros(+e.target.value));
                    }
                }/>
            </div>
            <button onClick={ _ => setNumbers(gerarNumeros(quant)) }>
                Jogar
            </button>
        </div>
    );
};