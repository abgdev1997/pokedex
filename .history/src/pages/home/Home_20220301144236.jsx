import React from 'react';
import './Home.css'
import pokeBall from '../../static/pokemon-4657023.png'

const Home = () => {
    return (
        <div>
            <img alt='pokeBall' src={pokeBall}><button type="button"></button></img>
        </div>
    );
}

export default Home;
