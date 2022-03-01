import React from 'react';
import './Pokemon.css'

const Pokemon = ({pokemon}) => {
    return (
        <div className="pokemon-card">
            <img alt={pokemon.name} src={pokemon.sprites.front_default} className="pokemon-image"/>
            <span className="pokemon-name">{pokemon.name.toUpperCase()}</span>
        </div>
    );
}

export default Pokemon;
