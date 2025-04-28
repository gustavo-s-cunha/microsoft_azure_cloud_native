// This file is the main JavaScript entry point for the application. 
// It initializes the components, sets up event listeners, and manages the application state.

import Die from './components/Die.js';
import Button from './components/Button.js';

const app = () => {
    const dieElement = document.getElementById('die');
    const buttonElement = document.getElementById('roll-button');

    const die = new Die(dieElement);
    const button = new Button(buttonElement, die);

    buttonElement.addEventListener('click', () => {
        die.roll();
    });
};

document.addEventListener('DOMContentLoaded', app);