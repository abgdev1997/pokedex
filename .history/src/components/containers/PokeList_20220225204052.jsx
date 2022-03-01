import React, { useEffect, useState } from 'react';
import { getAllPokemon, getOnePokemon } from '../../services/pokeFetchService.js';

const PokeList = () => {

    const [pokeList, setPokeList] = useState([]);
    
    const pokeRequest = () => {
        getAllPokemon()
        .then(data => {
            setPokeList(data.results);
        })
    }

    const pokeRequestDetails = (url) => {
        getOnePokemon(url)
        .then(data => {return data})
    }

    useEffect(() => {
        pokeRequest();
        
    }, []);

    return (
        <div>
            {console.log(pokeList.map(pokemon => console.log(pokemon)))}
        </div>
    );
}

export default PokeList;
