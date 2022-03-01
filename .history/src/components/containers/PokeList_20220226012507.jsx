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
        let poke = getOnePokemon(url)
        .then(pokemon => {
            return pokemon;
        })
        .catch(console.error)
        return poke;
    }

    useEffect(() => {
        let results = pokeRequest();
        let list = [];
        results.then(data => data.map(pokemon => list.push(pokeRequestDetails(pokemon.url))));
    }, []);

    return (
        <div className="pokemon-list">
            {pokeList.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon}/>)}
        </div>
    )
}

export default PokeList;
