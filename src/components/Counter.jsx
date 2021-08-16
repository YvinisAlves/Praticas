import './style.css'
import React, {useState} from 'react'


export function Counter(props){
    const [contador, setContador] = useState(0);
    function adicionarValor() {
        setContador(contador + 1);
    };
    function diminuirValor() {
        setContador(contador - 1);
    };
    return(
        <div id="container">
            <h2 id="nome">{props.children}</h2>
            <h3 id="id">{contador}</h3>
            <button onClick={diminuirValor}>Diminuir</button>
            <button onClick={adicionarValor}>Adicionar</button>
        </div>
    )
};