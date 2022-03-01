import React, { useEffect, useState } from 'react';
import './Pokemon.css'
import { getOnePokemon } from '../../services/pokeFetchService.js';

const Pokemon = ({ url }) => {

    const [pokemon, setPokemon] = useState("");
    const [image, setImage] = useState("");

    const pokeRequest = async(url) => {
        await getOnePokemon(url)
        .then(data => {
            setPokemon(data)
            setImage(data.sprites)
        })
        .catch(console.error)
    }

    useEffect(() => {
        pokeRequest(url);
    }, [url]);
    
    return (
        <div className="pokemon-card">
            <span>{pokemon.id}</span>
            <img alt={pokemon.name} src={image}/>
            <p>{pokemon.name}</p>
        </div>
    );
}

export default Pokemon;
