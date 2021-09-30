import React, { useContext } from 'react';
import { RingContext } from '../../App';

const Aunty = () => {

    const [ornaments, house] = useContext(RingContext);
    return (
        <div>
            <h2>Aunty</h2>
            <p>house: {house}</p>
            <p>{ornaments}</p>
        </div>
    );
};

export default Aunty;