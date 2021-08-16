import './style.css'
import React, {useState} from 'react'


export function UpperLowerCase(props){
    const [text, setText] = useState(props.children);
    function lowerCasePropChildren(){
        const textFinal = text.toUpperCase()
        setText(textFinal)
    }
    function upperCasePropChildren(){
        const textFinal = text.toLowerCase()
        setText(textFinal)
    }
    return(
        <div id="container">
            <h2 id="nome">{text}</h2>
            <button onClick={lowerCasePropChildren}>Minusculo</button>
            <button onClick={upperCasePropChildren}>Maiusculo</button>
        </div>
    )
};