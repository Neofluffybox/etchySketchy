const resetbtn = document.querySelector('#reset')
const box16 = document.querySelector('#b16')
const singleBox = document.querySelector('#box')

function colorChanger(color) {
    singleBox.style.backgroundColor = `${color}`;
}

function createBox(nmbr) {
    for (let i = 1; i <= nmbr; i++) {
        let container = document.querySelector('.container');
        let divBox = document.createElement('div');
        let selector = document.createAttribute('id');
        selector.value = 'box';
        divBox.setAttributeNode(selector);
        container.appendChild(divBox);
    }
}

box16.addEventListener('click', () => {
    createBox(256);
});
if (singleBox) {
    singleBox.addEventListener('mouseover', () => {
        colorChanger(red);
    });
}