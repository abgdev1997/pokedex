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
        <>
            {console.log(pokemon)}
        </>
    );
}

export default Pokemon;
