import React, { useEffect, useState } from 'react';
import { getAllPokemon, getOnePokemon } from '../../services/pokeFetchService.js';

const PokeList = () => {

    const [pokeList, setPokeList] = useState([]);
    
    const pokeRequest = () => {
        getAllPokemon()
        .then(data => {
            console.log(data.results)
            return data.results
        })
    }

    const pokeRequestDetails = (url) => {
        getOnePokemon(url)
        .then(data => {return data})
    }

    useEffect(() => {
        let results = pokeRequest();
        setPokeList(results);
    }, []);

    return (
        <div>
            {console.log(pokeList)}
        </div>
    );
}

export default PokeList;
