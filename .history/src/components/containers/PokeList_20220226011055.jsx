import React, { useEffect, useState } from 'react';
import { getAllPokemon, getOnePokemon } from '../../services/pokeFetchService.js';
import Pokemon from '../pure/Pokemon.jsx';
import './PokeList.css'

const PokeList = () => {

    const [pokeList, setPokeList] = useState([]);
    
    const pokeRequest = async() => {
        let results = await getAllPokemon()
        .then(data => {
            return (data.results);
        })
        .catch(console.error)
        return results;
    }

    const pokeRequestDetails = async(url) => {
        await getOnePokemon(url)
        .then(pokemon => setPokeList(e => [...e, pokemon]))
        .catch(console.error)
    }

    useEffect(() => {
        let results = pokeRequest();
        results.then(data => data.map(pokemon => pokeRequestDetails(pokemon.url)));
    }, []);

    return (
        <div className="pokemon-list">
            {pokeList.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon}/>)}
        </div>
    )
}

export default PokeList;
