import React, { useEffect, useState } from 'react';
import './Pokemon.css'
import { getOnePokemon } from '../../services/pokeFetchService.js';
import { BrowserRouter as Link } from "react-router-dom";

const Pokemon = ({ url }) => {

    const [pokemon, setPokemon] = useState({});

    const pokeRequest = async(url) => {
        await getOnePokemon(url)
        .then(data => {
            setPokemon(data)
        })
        .catch(console.error)
    }

    useEffect(() => {
        pokeRequest(url);
    }, [url]);
    
    return (
        <div className="pokemon-card">
            <div className="pokemon-id">
                <span>{pokemon.id}</span>
            </div>
            <div className="pokemon-body">
                <img alt={pokemon?.name} src={pokemon?.sprites?.front_default}/>
                <span>{pokemon?.name?.toUpperCase()}</span>
            </div>
        </div>
    );
}

export default Pokemon;
