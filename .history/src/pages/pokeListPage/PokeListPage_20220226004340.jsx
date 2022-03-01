import React from 'react';
import PokeList from '../../components/containers/PokeList';
import './PokeListPage.css'
import logo from '../../static/pokeball-icon-png-12.jpg'

const Pokelistpage = () => {
    return (
        <>
        <header>
            <img alt="pokedex" src={logo}></img>
        </header>
        <div>
            <PokeList></PokeList>
        </div>
        </>
    );
}

export default Pokelistpage;
