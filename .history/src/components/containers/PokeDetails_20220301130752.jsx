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
                <img className="img-poke" alt={pokemon?.name} src={pokemon.sprites?.other?.dream_world?.front_default}></img>
            </div>
            <div className="info">
                <span className="label">ID</span>
                <span className="info-label">{pokemon.id}</span>
                <span className="label">NAME</span>
                <span className="info-label">{pokemon?.name?.toUpperCase()}</span>
                <span className="label">TYPES</span>
                <div className="info-label">
                    {pokemon?.types?.map(type => <span className="type" key={type?.slot}> {type?.type?.name} </span>)}
                </div>   
                <span className="label">WEIGHT</span> 
                <span className="info-label">{pokemon?.weight}</span> 
                <span className="label">ABILITIES</span>
                <div className="info-label">
                    {pokemon?.abilities?.map((ability, index) => <span className="type" key={index}> {ability?.ability?.name} </span>)}
                </div>
            </div>
        </div>
    );
}

export default Pokedetails;
