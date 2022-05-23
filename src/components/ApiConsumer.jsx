import React, { useState } from 'react'
import './style.css'

export function ApiConsumer(){
    const [dados, setDados] = useState('')

    async function getUser(){
        try {
            const response = await fetch('http://localhost:4567/')
            const data = await response.json()
            showUser(data)
        } catch (error) {
            console.log(error)
        }
    }

    function showUser(users){
        let output = users.map(item => Object.keys(item).map(i => item[i]))
        let message = ''
        for(let user in output){
            message += `${output[user][0]} é ${output[user][2]} e tem ${output[user][1]} anos, `
        }
        setDados(message)
    }

    return(
        <div id="container">
            <div id="itens">{dados}</div>
            <button onClick={getUser}>Buscar Dados</button>
        </div>
    )
}