import React, { useEffect, useState } from 'react';
import { getAllPokemon, getOnePokemon } from '../../services/pokeFetchService.js';
import Pokemon from '../pure/Pokemon.jsx';
import './PokeList.css'

const PokeList = () => {

    const [pokeList, setPokeList] = useState([]);
    
    const pokeRequest = () => {
        let results = getAllPokemon()
        .then(data => {
            return (data.results);
        })
        .catch(console.error)
        return results;
    }

    const pokeRequestDetails = (url) => {
        let array = [];
        getOnePokemon(url)
        .then(pokemon => array.push(pokemon))
        .catch(console.error);
        setPokeList(array);
    }

    useEffect(() => {
        let results = pokeRequest();
        results.then(data => data.map(pokemon => pokeRequestDetails(pokemon.url)));
    }, []);

    return (
        <div className="pokemon-list">
            {pokeList.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} ></Pokemon>)}
        </div>
    )
}

export default PokeList;
