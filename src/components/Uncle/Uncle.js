import React from 'react';

const Uncle = (props) => {
    const { house } = props;
    return (
        <div>
            <h2>Uncle</h2>
            <p>house: {house}</p>
        </div>
    );
};

export default Uncle;