import React from 'react';

export default (props) => {
    const number1 = Math.floor(Math.random() * 70);
    const number2 = Math.floor(Math.random() * 70);

    const { min, max } = props;
    const aleatorio = parseInt(Math.random() * (max - min)) + min;

    console.log('O numero 1 é = ' + number1 + ' já o numero 2 é = ' + number2);
    return (
        <div>
            <h2>Valor Aleátorio</h2>
            <p>
                <strong>Valor Mínimo: </strong> {min}
            </p>
            <p>
                <strong>Valor Máximo: </strong> {max}
            </p>
            <p>
                <strong>Valor Gerado: </strong> {aleatorio}
            </p>
            <p>
                <strong>Valor 1: </strong> {number1}
                <strong> Valor 2: </strong> {number2}
            </p>
        </div>
    );
}