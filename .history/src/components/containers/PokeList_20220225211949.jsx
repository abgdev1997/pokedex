import React, { useEffect, useState } from 'react';
import { getAllPokemon, getOnePokemon } from '../../services/pokeFetchService.js';

const PokeList = () => {

    const [pokeList, setPokeList] = useState([]);
    
    const pokeRequest = () => {
        let results = getAllPokemon()
        .then(data => {
            return (data.results);
        })
        return results;
    }

    const pokeRequestDetails = (url) => {
        getOnePokemon(url)
        .then(pokemon => setPokeList(e => [...e, pokemon]))
    }

    useEffect(() => {
        let results = pokeRequest();
        results.then(data => data.map(pokemon => pokeRequestDetails(pokemon.url)));
    }, []);

    return (
        <div>
            {pokeList.map(pokemon => <img alt={pokemon.name} key={pokemon.id} src={pokemon.sprites.front_default}/>)}
        </div>
}

export default PokeList;
