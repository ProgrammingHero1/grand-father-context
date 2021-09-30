import React from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';

const GrandFather = (props) => {
    const { house } = props;
    return (
        <div>
            <h2>GrandFather</h2>
            <h5>House: {house}</h5>
            <div style={{ display: 'flex' }}>
                <Father house={house}></Father>
                <Uncle house={house}></Uncle>
                <Aunty house={house}></Aunty>
            </div>
        </div>
    );
};

export default GrandFather;