import React, { useEffect, useState } from 'react';
import { getAllPokemon } from '../../services/pokeFetchService.js';

const PokeList = () => {

    const [pokeList, setPokeList] = useState([]);
    
    const pokeRequest = () => {
        getAllPokemon()
        .then(data => {
            setPokeList(data);
            console.log(data);
        })
    }

    useEffect(() => {
        pokeRequest();
    }, []);

    return (
        <div>
        </div>
    );
}

export default PokeList;
