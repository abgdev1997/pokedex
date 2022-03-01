import React, { useEffect, useState } from 'react';
import { getAllPokemon } from '../../services/pokeFetchService.js';
import Pokemon from '../pure/Pokemon.jsx';
import './PokeList.css'

const PokeList = () => {

    const [pokeList, setPokeList] = useState([]);
    
    const pokeRequest = () => {
        getAllPokemon()
        .then(data => setPokeList(data.results))
        .catch(console.error)
    }

    useEffect(() => {
        pokeRequest();
    }, []);

    return (
        <div className="pokemon-list">
            {pokeList.map((pokemon, index) => <Pokemon key={index} url={pokemon.url}></Pokemon>)}
        </div>
    )
}

export default PokeList;
