import React, { useEffect, useState } from 'react';
import { getOnePokemon } from '../../services/pokeFetchService';
import './PokeDetails.css'

const Pokedetails = () => {

    const url = "https://pokeapi.co/api/v2/pokemon/1/";

    const [pokemon, setPokemon] = useState({});
    const [types, setTypes] = useState([]);

    const pokeRequest = async(url) => {
        await getOnePokemon(url)
        .then(data => {
            setPokemon(data)
            setTypes(data.types)
        })
        .catch(console.error)
    }

    useEffect(() => {
        pokeRequest(url);
    }, [url]);

    return (
        <div className="container">
            <div className="image">
                <img alt={pokemon?.name} src={pokemon.sprites?.other?.dream_world?.front_default}></img>
            </div>
            <div className="info">
                <span>ID: {pokemon.id}</span>
                <span>Name: {pokemon?.name?.toUpperCase()}</span>
                <div>
                    <span>Types:</span>
                        <div>
                            {console.log(pokemon.types[0].type?.name)}
                        </div>
                </div>
            </div>
        </div>
    );
}

export default Pokedetails;
