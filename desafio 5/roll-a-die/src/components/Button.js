import React from 'react';

const Button = ({ onRoll }) => {
    return (
        <button id='roll-button' className="roll-button" onClick={onRoll}>
            Roll the Die
        </button>
    );
};

export default Button;