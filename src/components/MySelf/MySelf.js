import React from 'react';
import Special from '../Speical/Special';

const MySelf = (props) => {
    const { house } = props;
    return (
        <div>
            <h2>MySelf</h2>
            <small>house: {house}</small>
            <Special></Special>
        </div>
    );
};

export default MySelf;