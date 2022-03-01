import React from 'react';
import PokeList from '../../components/containers/PokeList';
import './PokeListPage.css'
import pokeBallLogo from '../../static/129-1298536_pokeball-free-icon-pokeball-icon.svg'

const Pokelistpage = () => {
    return (
        <>
        <header>
            <img alt="Pokédex" src={pokeBallLogo}></img>
        </header>
        <div>
            <PokeList></PokeList>
        </div>
        </>
    );
}

export default Pokelistpage;
