function createSquares(elements, box) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.border = '1px solid black';
    for(let i = 0; i < elements * elements; i++) {
        box.appendChild(square.cloneNode(true));
    }
}

const container = document.querySelector('.container')

createSquares(16, container);

const squares = document.querySelectorAll('.square');

squares.forEach(square => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = "yellow";
        });
    }
)

const size = document.querySelector('.size');

size.addEventListener('click', () => {
    let rowsAndCols = prompt('Type size lower or equal 100:');
    if(rowsAndCols > 100) {
        return;
    }
    container.textContent = '';
    container.style.gridTemplateColumns = `repeat(${rowsAndCols}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${rowsAndCols}, 1fr)`;
    createSquares(rowsAndCols, container);
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = "yellow";
        });
    }
)
});