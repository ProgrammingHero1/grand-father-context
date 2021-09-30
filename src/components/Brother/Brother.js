import React from 'react';

const Brother = (props) => {
    const { house } = props;
    return (
        <div>
            <h2>Brother</h2>
            <small>house: {house}</small>
        </div>
    );
};

export default Brother;