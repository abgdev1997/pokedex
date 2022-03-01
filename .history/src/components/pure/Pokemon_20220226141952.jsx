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
        <div>
            {console.log(pokemon.id + "-" + pokemon.name + "-" + pokemon.sprites.front_default)}
        </div>
    );
}

export default Pokemon;
