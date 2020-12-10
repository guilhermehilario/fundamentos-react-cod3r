/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import './Contador.css';

import React, { Component } from 'react';

import Display from './Display';
import Button from './Botoes';
import PassoForm from './PassoForm';

export default class contador extends Component {

    state = {
        number: this.props.initialNumber || 0,
        passo: this.props.passoInicial || 5,
    };

    inc = () => {
        this.setState({
            number: this.state.number + this.state.passo,
        });
    };

    dec = () => {
        this.setState({
            number: this.state.number - this.state.passo,
        });
    };

    setPasso = (newPasso) => {
        this.setState({
            passo: newPasso,
        });
    };

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <Display number={ this.state.number }/>
                <PassoForm passo={this.state.passo} setPasso={this.setPasso}/>
                <Button setInc={this.inc} setDec={this.dec}/>
            </div>
        );
    };
};