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
        .then(pokemon => console.log(pokemon.name + " " + pokemon.sprites.front_default))
    }

    useEffect(() => {
        let results = pokeRequest();
        results.then(data => data.map(pokemon => pokeRequestDetails(pokemon.url)));
    }, []);

    return (
        <div>
        </div>
    );
}

export default PokeList;
