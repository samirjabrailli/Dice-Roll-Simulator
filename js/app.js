


const diceElement = document.querySelector('.daice i');
const rollButton = document.querySelector('#rolldice');
const txtElement = document.querySelector("#txt");


rollButton.addEventListener('click', rollDice);

function rollDice(){
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
        case 1:
            diceElement.className = 'fa-solid fa-dice-one';
            txt.className = 'fa-solid fa-dice-one';
            break;
        case 2:
            diceElement.className = 'fa-solid fa-dice-two';
            txt.className = 'fa-solid fa-dice-two';
            break;
        case 3:
            diceElement.className = 'fa-solid fa-dice-three';
            txt.className = 'fa-solid fa-dice-three';
            break;
        case 4:
            diceElement.className = 'fa-solid fa-dice-four';
            txt.className = 'fa-solid fa-dice-four';
            break;
        case 5:
            diceElement.className = 'fa-solid fa-dice-five';
            txt.className = 'fa-solid fa-dice-five';
            break;
        case 6:
            diceElement.className = 'fa-solid fa-dice-six';
            txt.className = 'fa-solid fa-dice-six';
            break;
    }

    txtElement.textContent = `${txtDiceElement.outerHTML} You rolled: ${randomNumber}`;
}