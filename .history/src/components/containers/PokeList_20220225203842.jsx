import React, { useEffect, useState } from 'react';
import { getAllPokemon, getOnePokemon } from '../../services/pokeFetchService.js';

const PokeList = () => {

    const [pokeList, setPokeList] = useState([]);
    
    const pokeRequest = () => {
        let results = getAllPokemon()
        .then(data => {
            return data.results;
        })

        return results;
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
            {console.log(pokeList.PromiseResult[0].name)}
        </div>
    );
}

export default PokeList;
