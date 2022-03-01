import React from 'react';
import './Home.css'
import pokeBall from '../../static/pokemon-5151118.jpg'

const Home = () => {
    return (
        <div>
            <img alt='pokeBall' src={pokeBall} className='background-image'></img>
        </div>
    );
}

export default Home;
