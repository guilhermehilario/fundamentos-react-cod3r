/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import './App.css';

import React from 'react';

import Card from './components/layout/Card';

import Mega from "./components/mega/Mega";
import Contador from "./components/contador/Contador";
import Input from './components/formulario/Input';
import IndiretaPai from "./components/comicacao/IndiretaPai";
import DiretaPai from './components/comicacao/DiretaPai';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import ParOuImpar from './components/condicional/ParOuImpar';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ListaAlunos from './components/repeticao/ListaAlunos';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import Aleatorio from './components/basicos/Aleatorio';
import Fragmento from './components/basicos/Fragmento';
import ComParametro from './components/basicos/ComParametro';
import Primeiro from './components/basicos/Primeiro';

export default (_) => 
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Exercicios">

            <Card titulo="#13 - Mega Sena" color="#B9006E">
                <Mega></Mega>
            </Card>

            <Card titulo="#12 - Contador" color="#424242">
                <Contador initialNumber={10}></Contador>
            </Card>

            <Card titulo="#11 - Componente controlado" color="#E45F56">
                <Input></Input>
            </Card>

            <Card titulo="#10 - Comunicação Indireta" color="#8BAD39">
                <IndiretaPai></IndiretaPai>
            </Card>

            <Card titulo="#09 - Comunicação Direta" color="#59323C">
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo="#08 - Repetição condicional" color="#9C0F5F">
                <ParOuImpar numero={21}/>
                <UsuarioInfo usuario={{ name: 'Fernando'}} />
                <UsuarioInfo usuario={{ email: 'Fer@nando.com'}} />
            </Card>

            <Card titulo="#07 - Repetição" color="#ABA918">
                <TabelaProdutos/>
            </Card>

            <Card titulo="#06 - Repetição" color="#FF4C65">
                <ListaAlunos/>
            </Card>

            <Card titulo="#05 - Componente com filhos" color="#00C8F8">
                <Familia surname="Hilario">
                    <FamiliaMembro name="Guilherme"/>
                    <FamiliaMembro name="Paula"/>
                    <FamiliaMembro name="Frida"/>
                    <FamiliaMembro name="Ludovica"/>
                </Familia>
            </Card>

            <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
                <Aleatorio min={1} max={60} />
            </Card>

            <Card titulo="#03 - Fragmento" color="#E94C6F">
                <Fragmento />
            </Card>

            <Card titulo="#02 - Com Parâmetro" color="#E8B71A">
                <ComParametro
                    titulo="Situação do Aluno"
                    nome="Pedro"
                    nota={9.1}
                />
            </Card>

            <Card titulo="#01 - Primeiro Componente" color="#588C73">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>
    