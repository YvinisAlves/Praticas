import React, {useState} from 'react'
import './style.css'

export function Pokemon(){
    const [pokemon, setPokemon] = useState('Name');
    const [id, setId] = useState('Id');
    const [sprite, setSprite] = useState('');
    const Pokedex = require("pokeapi-js-wrapper")
    const P = new Pokedex.Pokedex()

    async function getPokemon(requestedPokemon){
        const pokemonData = await P.getPokemonByName(requestedPokemon)
        setPokemon(pokemonData['name'])
        setId(pokemonData['id'])
        setSprite(pokemonData['sprite'])
    }
    return(
        <div id="container">
            <h2 id='nome'>{pokemon}</h2>
            <h3 id='idNumber'>{id}</h3>
            <form>
                <button onClick={() => getPokemon('pidgey')}>Request</button>
            </form>
        </div>
    )
}