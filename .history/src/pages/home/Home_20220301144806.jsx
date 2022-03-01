import React from 'react';
import './Home.css'
import pokeBall from '../../static/small-4021854_1920.jpg'

const Home = () => {
    return (
        <div>
            <img alt='pokeBall' src={pokeBall} className='background-image'></img>
        </div>
    );
}

export default Home;
