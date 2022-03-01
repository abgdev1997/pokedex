import React from 'react';
import PokeList from '../../components/containers/PokeList';
import './PokeListPage.css'
import logo from '../../static/pokeball-icon-png-12.jpg'

const Pokelistpage = () => {
    return (
        <div>
        <header className="header">
            <img alt="pokedex" src={logo} className="img"></img>
        </header>
        <div className="body">
            <PokeList></PokeList>
        </div>
        </div>
    );
}

export default Pokelistpage;