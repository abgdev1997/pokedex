import React from 'react';

const TypeButton = (name) => {
    return (
        <div>
            <span>{name?.toUpperCase()}</span>
        </div>
    );
}

export default TypeButton;
