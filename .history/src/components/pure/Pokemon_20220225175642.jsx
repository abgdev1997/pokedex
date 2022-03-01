import React from 'react';
import pokemones from '../../static/pokemon.json'

const Pokemon = () => {
    return (
        <div>
            <img alt={pokemones.results[0].name} src={pokemones.results[0].url}/>
            <span>{pokemones.results[0].name}</span>
        </div>
    );
}

export default Pokemon;
