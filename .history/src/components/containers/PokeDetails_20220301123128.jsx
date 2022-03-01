import React, { useEffect, useState } from 'react';
import { getOnePokemon } from '../../services/pokeFetchService';
import './PokeDetails.css'

const Pokedetails = () => {

    const url = "https://pokeapi.co/api/v2/pokemon/1/";

    const [pokemon, setPokemon] = useState("");

    const pokeRequest = async(url) => {
        await getOnePokemon(url)
        .then(data => {
            setPokemon(data)
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
                <span>ID</span>
                <span>{pokemon.id}</span>
                <span>NAME</span>
                <span>{pokemon?.name?.toUpperCase()}</span>
                <span>TYPES</span>
                <div>
                    {pokemon?.types?.map(type => <span className="type" key={type?.slot}> {type?.type?.name} </span>)}
                </div>     
            </div>
        </div>
    );
}

export default Pokedetails;
