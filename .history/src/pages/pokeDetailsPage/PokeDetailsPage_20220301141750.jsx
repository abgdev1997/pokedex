import React from 'react';
import './PokeDetailsPage.css'
import PokeDetails from '../../components/containers/PokeDetails'
import { useParams } from "react-router-dom";

const PokeDetailsPage = () => {

    const { pokemonId } = useParams();

    return (
            <div>
                <PokeDetails id={ pokemonId }></PokeDetails>
            </div>
    )
}

export default PokeDetailsPage;
