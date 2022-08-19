function createSquares(elements, box) {
    const square = document.createElement('div');
    square.style.border = '2px solid black';

    for(let i = 0; i < elements * elements; i++) {
        box.appendChild(square.cloneNode(true));
    }
}

const container = document.querySelector('.container')

createSquares(16, container);