import React from 'react';
import logo from '../../static/pokeball-icon-png-12.jpg'
import './PokeDetailsPage.css'
import PokeDetails from '../../components/containers/PokeDetails'
import { useParams } from "react-router-dom";

const PokeDetailsPage = () => {

    const { pokemonId } = useParams();

    return (
        <div className="body">
            <header className="header">
                <img alt="pokedex" src={logo} className="img"></img>
            </header>
            <div>
                <PokeDetails id={ pokemonId }></PokeDetails>
            </div>
        </div>
    )
}

export default PokeDetailsPage;
