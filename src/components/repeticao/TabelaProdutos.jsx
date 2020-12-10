/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import './ListaProdutos.css';
import React from 'react';

import produtos from '../../data/produtos';

export default props => {

    const linhas = produtos.map((produto, i) => {
        return ( 
            <tr key={produto.id} className={i % 2 === 0 ? 'Par' : ''}>
                <td > {produto.id} </td>
                <td>{produto.productName}</td>
                <td>R$ {produto.price.toFixed(2).replace('.', ',')}</td>
            </tr>
        );
    });

    return (
        <div className="tableContent">
            <table className="productTable">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Produto</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {linhas}
                </tbody>
            </table>
        </div>
    );
}