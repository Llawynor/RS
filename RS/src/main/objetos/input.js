import React from 'react';

export const Input = ({ textoLabel, idInput, tipo, placeholder }) => (
    <div className="divInput">
        <label className="meuLabel">{ textoLabel }</label>
        <input id={ idInput } className="meuInput" type={ tipo } placeholder={ placeholder } />
    </div>
);