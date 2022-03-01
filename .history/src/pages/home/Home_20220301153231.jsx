import React from 'react';
import './Home.css'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div className="home">
            <div className="box-home">
                <label className="best">The best Pokedex in the world</label>
                <Link to="/pokemon">
                <button className="get-started">Get Started</button>
                </Link>
            </div>
        </div>
    );
}

export default Home;
