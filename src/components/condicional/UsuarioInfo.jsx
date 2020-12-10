/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import If, { Else } from './If';

import React from 'react';

export default props => {

    const usuario = props.usuario || {};

    return (
        <div>
            {/* <If test={usuario && usuario.name}>
                Seja bem vindo <strong>{ usuario.name }</strong>!
            </If>
            <If test={!usuario || !usuario.name}>
                Seja bem vindo <strong>Amigão</strong>!
            </If> */}

            <If test={usuario && usuario.name}>
                Seja bem vindo <strong>{ usuario.name }</strong>
                <Else>
                    Seja bem vindo <strong>Amigão</strong>
                </Else>
            </If>
        </div>
    );
};

