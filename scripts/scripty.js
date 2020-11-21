const resetBtn = document.querySelector('#reset')
const singleBox = document.querySelector('.box')
const clear = document.getElementsByClassName('box')
const article = document.querySelector('#article')
const container = document.querySelector('.container')
const box16 = document.querySelector('#b16')
const box30 = document.querySelector('#b30')
const box60 = document.querySelector('#b60')

function colorChanger(color) {
    singleBox.style.backgroundColor = `${color}`;
}

function clearArea() {
    container.innerHTML = '';
}

function createBox(nmbr) {
    if (nmbr == 256) {
        article.style.flexBasis = '289px';
        article.style.height = '289px';
        for (let i = 1; i <= nmbr; i++) {
            let divBox = document.createElement('div');
            divBox.setAttribute('class', 'box');
            container.appendChild(divBox);
            resetBtn.innerHTML = 'Reset';
        };
    } else if (nmbr == 900) {
        article.style.flexBasis = '270px';
        article.style.height = '270px';
        for (let i = 1; i <= nmbr; i++) {
            let divBox = document.createElement('div');
            divBox.setAttribute('class', 'box');
            divBox.style.height = '9px';
            divBox.style.width = '9px';
            container.appendChild(divBox);
            resetBtn.innerHTML = 'Reset';

        };
    } else {
        article.style.flexBasis = '300px';
        article.style.height = '300px';
        for (let i = 1; i <= nmbr; i++) {
            let divBox = document.createElement('div');
            divBox.setAttribute('class', 'box');
            divBox.style.height = '5px';
            divBox.style.width = '5px';
            container.appendChild(divBox);
            resetBtn.innerHTML = 'Reset';
        };

    };
}

resetBtn.addEventListener('click', () => {
    clearArea();
})
box16.addEventListener('click', () => {
    clearArea();
    createBox(256);
})
box30.addEventListener('click', () => {
    clearArea();
    createBox(900);
})
box60.addEventListener('click', () => {
    clearArea();
    createBox(3600);
})