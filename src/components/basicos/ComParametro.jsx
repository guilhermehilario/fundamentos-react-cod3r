import React from 'react';

export default function ComParametro(props) {
    console.log(props);
    const status = props.nota >= 7 ? 'Aprovado' : 'Recuperação';
    return (
        <div>
            <h2>{ props.titulo }</h2>
            <p>
                <strong>{ props.nome } </strong>
                tem nota
                <strong> { props.nota } </strong>
                e { status === 'Aprovado' ? 'foi' : 'está de' }
                <strong> { status }.</strong>
            </p>
        </div>
    );
}