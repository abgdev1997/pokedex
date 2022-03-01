import React, { useEffect, useState } from 'react';
import './Pokemon.css'
import { getOnePokemon } from '../../services/pokeFetchService.js';

const Pokemon = ({url}) => {

    const [pokemon, setPokemon] = useState();

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
            <img alt={pokemon.name} src={pokemon.sprites.front_default} className="pokemon-image"/>
            <span className="pokemon-name">{pokemon.name.toUpperCase()}</span>
        </div>
    );
}

export default Pokemon;
