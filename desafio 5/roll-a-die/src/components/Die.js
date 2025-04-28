// import React, { useState } from 'react';
// import './Die.scss';

// const Die = () => {
//     const [value, setValue] = useState(1);
//     const [isRolling, setIsRolling] = useState(false);

//     const rollDie = () => {
//         setIsRolling(true);
//         const newValue = Math.floor(Math.random() * 6) + 1;
//         setValue(newValue);
//         setTimeout(() => {
//             setIsRolling(false);
//         }, 1000); // Duration of the animation
//     };

//     return (
//         <div id='die' className={`die ${isRolling ? 'rolling' : ''}`} onClick={rollDie}>
//             <img src={`./assets/dice/die-${value}.svg`} alt={`Die showing ${value}`} />
//         </div>
//     );
// };
class Die {
    constructor(element) {
        this.element = element;
        this.value = 1;
        this.isRolling = false;
    }

    roll() {
        this.isRolling = true;
        const newValue = Math.floor(Math.random() * 6) + 1;
        this.value = !newValue ? 1 : newValue > 6 ? 6 : newValue;

        // Simulate the rolling animation
        this.element.classList.add('rolling');
        setTimeout(() => {
            this.element.classList.remove('rolling');
            this.element.src = `./assets/dice/die-${this.value}.svg`;
            this.isRolling = false;
        }, 1000); // Duration of the animation
    }
}

export default Die;