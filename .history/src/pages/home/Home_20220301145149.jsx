import React from 'react';
import './Home.css'
import pokeBall from '../../static/pixel-3316924.ai'

const Home = () => {
    return (
        <div>
            <img alt='pokeBall' src={pokeBall} className='background-image'></img>
        </div>
    );
}

export default Home;
