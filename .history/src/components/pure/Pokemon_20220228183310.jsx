import React, { useEffect, useState } from 'react';
import './Pokemon.css'
import { getOnePokemon } from '../../services/pokeFetchService.js';

const Pokemon = ({ url }) => {

    const [pokemon, setPokemon] = useState({});
    const [image, setImage] = useState("");

    const pokeRequest = async(url) => {
        await getOnePokemon(url)
        .then(data => {
            setPokemon(data)
            setImage(data.sprites)
        })
        .catch(console.error)
    }

    const upperCase = (name) => {
        return name.toUpperCase();
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
                <img alt={pokemon.name} src={image.front_default}/>
                <span>{upperCase(pokemon.name)}</span>
            </div>
        </div>
    );
}

export default Pokemon;
