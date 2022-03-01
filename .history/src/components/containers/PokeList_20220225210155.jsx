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
        .then(data => {return data})
    }

    useEffect(() => {
        let results = pokeRequest();
        results.then(data => console.log(data))
    }, []);

    return (
        <div>
        </div>
    );
}

export default PokeList;
