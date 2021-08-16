import './style.css'
import React, { useState } from 'react'

export function Cronometer(){
    const [second, setSecond] = useState(0);
    const delay = ms => new Promise(res => setTimeout(res, ms));
    async function nextSecond(){
        await delay(1000);
        setSecond(second + 1)
    }
    nextSecond()
    return(
        <div id="container">
            <h2>Cronometro</h2>
            <h3>{second}</h3>
        </div>
    )
}