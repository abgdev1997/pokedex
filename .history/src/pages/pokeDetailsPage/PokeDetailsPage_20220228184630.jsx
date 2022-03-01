import React from 'react';
import logo from '../../static/pokeball-icon-png-12.jpg'
import './PokeDetailsPage.css'
import PokeDetails from '../../components/containers/PokeDetails'

const PokeDetailsPage = () => {
    return (
        <div>
            <header className="header">
                <img alt="pokedex" src={logo} className="img"></img>
            </header>
            <div className="body">
                <PokeDetails></PokeDetails>
            </div>
        </div>
    )
}

export default PokeDetailsPage;
