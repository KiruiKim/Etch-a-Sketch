const container = document.getElementById("container");
const numberOfSquare = document.getElementById("number");
const resetBtn = document.getElementById("reset");

const DEFAULT_SIZE = 16; 


function createGrid(n = DEFAULT_SIZE) {
    container.innerHTML = "";
    container.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${n}, 1fr)`;

    for (let i = 0; i < n * n; i++) {
        const box = document.createElement("div");
        box.classList.add("grid-item");
        container.appendChild(box);
    }
}


createGrid(DEFAULT_SIZE);


function createNumberOfSquares() {
    const num = parseInt(numberOfSquare.value);
    if (!num || num <= 0) {
        alert("Please enter a positive number!");
        return;
    }
    createGrid(num);
}

resetBtn.addEventListener("click", resetGame);

function resetGame() {
    createGrid(DEFAULT_SIZE);
    numberOfSquare.value = "";
}
