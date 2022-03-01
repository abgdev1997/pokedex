import React from 'react';

const Pokemon = ({pokemon}) => {
    return (
        <div>
            <img alt={pokemon.name} src={pokemon.sprites.front_default}/>
            <span>{pokemon.name.toUpperCase()}</span>
        </div>
    );
}

export default Pokemon;
