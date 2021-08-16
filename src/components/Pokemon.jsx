import React from 'react'
import './style.css'

export function Pokemon(){
    async function getPokemon(){
        try {
            const response = await fetch('http://localhost:4567/')
            const data = await response.json()
            console.log(data[0])
        } catch (error) {
            console.log(error)
        }
    }
    getPokemon()

    return(
        <div id="container">
            <h2 id='nome'>Nome</h2>
        </div>
    )
}