import React, { useEffect, useState } from 'react';
import { getAllPokemon, getOnePokemon } from '../../services/pokeFetchService.js';

const PokeList = () => {

    const [pokeList, setPokeList] = useState([]);
    
    const pokeRequest = () => {
        getAllPokemon()
        .then(data => {
            data.result.map(pokemon => getOnePokemon(pokemon.url).then(onePokemon => setPokeList(e => [...e, onePokemon])))
        })
    }

    useEffect(() => {
        pokeRequest();
    }, []);

    return (
        <div>
            {console.log(pokeList)}
        </div>
    );
}

export default PokeList;
