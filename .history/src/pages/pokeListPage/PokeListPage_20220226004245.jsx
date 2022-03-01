import React from 'react';
import PokeList from '../../components/containers/PokeList';
import './PokeListPage.css'

const Pokelistpage = () => {
    return (
        <>
        <header>
            <img alt="pokedex" src="../../static/pokeball-icon-png-12.jpg"></img>
        </header>
        <div>
            <PokeList></PokeList>
        </div>
        </>
    );
}

export default Pokelistpage;
