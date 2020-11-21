const resetBtn = document.querySelector('#reset')
const box16 = document.querySelector('#b16')
const singleBox = document.querySelector('.box')
const clear = document.getElementsByClassName('box');
const container = document.querySelector('.container');

function colorChanger(color) {
    singleBox.style.backgroundColor = `${color}`;
}

function clearArea() {
    container.innerHTML = '';
}

function createBox(nmbr) {
    for (let i = 1; i <= nmbr; i++) {
        let divBox = document.createElement('div');
        divBox.setAttribute('class', 'box');
        container.appendChild(divBox);
        resetBtn.innerHTML = 'Reset';
    }
}

resetBtn.addEventListener('click', () => {
    clearArea();
    createBox(256);
})
box16.addEventListener('click', () => {
    clearArea();
    createBox(256);
})

if (singleBox) {
    singleBox.addEventListener('mouseover', () => {
        colorChanger(red);
    });
}