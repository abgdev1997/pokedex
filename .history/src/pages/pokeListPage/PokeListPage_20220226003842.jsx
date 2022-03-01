import React from 'react';
import PokeList from '../../components/containers/PokeList';
import './PokeListPage.css'

const Pokelistpage = () => {
    return (
        <>
        <header>
            <img alt="pokedex" src="../../static/129-1298536_pokeball-free-icon-pokeball-icon.svg"></img>
        </header>
        <div>
            <PokeList></PokeList>
        </div>
        </>
    );
}

export default Pokelistpage;
