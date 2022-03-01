import React, { useEffect, useState } from 'react';
import './Pokemon.css'
import { getOnePokemon } from '../../services/pokeFetchService.js';

const Pokemon = ({ url }) => {

    const [pokemon, setPokemon] = useState({});
    const [image, setImage] = useState("");

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
            {console.log(pokemon.sprites)}
            <span>{pokemon.id}</span>
            <img alt={pokemon.name}/>
            <p>{pokemon.name}</p>
        </div>
    );
}

export default Pokemon;
