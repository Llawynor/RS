import React from 'react';
import { Input } from '../objetos/input';
import { Botao } from '../objetos/botao';

export const FragmentoEntrar = ({ onClick }) => (
    <div id="fragmentoEntrar" className="fragmento">
        <fieldset className="fieldsetAut">
            <legend>Entrar</legend>
            <Input textoLabel="E-mail:" idInput="emailEntrar" placeholder="Digite seu e-mail aqui!" />
            <Input textoLabel="Senha:" idInput="senhaEntrar" tipo="password" placeholder="Digite sua senha aqui!" />
            <Botao divBotaoId="divBotaoEntrar" idBotao="botaoEntrar" onClick={ onClick } textoBotao="Entrar" />
        </fieldset>
    </div>
);
