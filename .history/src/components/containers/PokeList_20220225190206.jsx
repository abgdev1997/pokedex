import React, { useEffect, useState } from 'react';
import { getAllPokemon } from '../../services/pokeFetchService.js';

const PokeList = () => {

    const [pokeList, setPokeList] = useState([]);
    
    const pokeRequest = () => {
        getAllPokemon()
        .then(data => {
            setPokeList(data);
            console.table(data);
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
