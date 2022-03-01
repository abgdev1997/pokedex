import React, { useEffect, useState } from 'react';
import './Pokemon.css'
import { getOnePokemon } from '../../services/pokeFetchService.js';

const Pokemon = ({ url }) => {

    const [pokemon, setPokemon] = useState({});

    const pokeRequest = (url) => {
        getOnePokemon(url)
        .then(data => setPokemon(data))
        .catch(console.error)
    }

    useEffect(() => {
        pokeRequest(url);
    }, [url]);
    
    return (
        <div className="pokemon-card">
            <span>{pokemon.id}</span>
            <img alt={pokemon.name} src={pokemon.sprites.front_default}/>
            <p>{pokemon.name}</p>
        </div
    );
}

export default Pokemon;
