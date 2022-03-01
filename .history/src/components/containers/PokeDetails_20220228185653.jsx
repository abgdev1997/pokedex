import React, { useEffect, useState } from 'react';
import { getOnePokemon } from '../../services/pokeFetchService';
import './PokeDetails.css'

const Pokedetails = () => {

    const url = "https://pokeapi.co/api/v2/pokemon/1/";

    const [pokemon, setPokemon] = useState({});
    const [image, setImage] = useState("");
    const [name, setName] = useState("");

    const pokeRequest = async(url) => {
        await getOnePokemon(url)
        .then(data => {
            setPokemon(data)
            setImage(data.sprites)
            setName(data.name.toUpperCase())
        })
        .catch(console.error)
    }

    useEffect(() => {
        pokeRequest(url);
    }, [url]);

    return (
        <div className="container">
            <div className="image">
                <img alt={name} src={image.front_default}></img>
            </div>
            <div className="info">
                <span>{pokemon.id}</span>
                <span>{name}</span>
            </div>
        </div>
    );
}

export default Pokedetails;
