import React, { useEffect, useState } from 'react';
import './Pokemon.css'
import { getOnePokemon } from '../../services/pokeFetchService.js';

const Pokemon = ({ url }) => {

    const [pokemon, setPokemon] = useState({});
    const [image, setImage] = useState("");
    const [name, setName] = useState("");

    const pokeRequest = async(url) => {
        await getOnePokemon(url)
        .then(data => {
            setPokemon(data)
            setImage(data.sprites)
            setName(data.name.toUpperCase())
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
                <img alt={name} src={image.front_default}/>
                <span>{name}</span>
            </div>
        </div>
    );
}

export default Pokemon;
