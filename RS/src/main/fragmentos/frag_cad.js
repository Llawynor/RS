import React from 'react';
import { Input } from '../objetos/input';
import { Botao } from '../objetos/botao';

export const FragmentoCadastrar = ({ onClick }) => (
    <div id="fragmentoCadastrar" className="fragmento">
        <fieldset className="fieldsetAut">
            <legend>Cadastrar</legend>
            <Input textoLabel="Nome:" idInput="nomeCad" placeholder="Digite seu nome aqui!" />
            <Input textoLabel="E-mail:" idInput="emailCad" placeholder="Digite seu e-mail aqui!" />
            <Input textoLabel="Senha:" idInput="senhaCad" tipo="password" placeholder="Digite seu e-mail aqui!" />
            <Input textoLabel="Senha:" idInput="senhaCad2" tipo="password" placeholder="Digite sua senha novamente!" />
            <Botao divBotaoId="botaoCadastrar" idBotao="botaoCadastrar" textoBotao="Cadastrar" onClick={ onClick } />
        </fieldset>
    </div>
);
