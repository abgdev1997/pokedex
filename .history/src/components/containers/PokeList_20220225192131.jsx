import React, { useEffect, useState } from 'react';
import { getAllPokemon, getOnePokemon } from '../../services/pokeFetchService.js';

const PokeList = () => {

    const [pokeList, setPokeList] = useState([]);
    const [pokeListDetails, setPokeListDetails] = useState([]);
    
    const pokeRequest = () => {
        getAllPokemon()
        .then(data => {
            setPokeList(data);
        })
    }

    useEffect(() => {
        pokeRequest();
        console.log(pokeList)
    }, []);

    return (
        <div>
        </div>
    );
}

export default PokeList;
