import React from 'react';

export const Botao = ({ divBotaoId, idBotao, onClick, textoBotao }) => (
    <div id={ divBotaoId }>
        <button id={ idBotao } className="botao" type="button" onClick={ onClick } >{ textoBotao }</button>
    </div>
);