const GRID_SIZE = 960; // Pixels per side
const container = document.querySelector(".container");

let numSquares;
let keepAsking = true;

// Prompt user for dimensions of grid
while (keepAsking) {
    numSquares = +prompt("# of squares per side: ", "16 - 100");
    if (Number.isInteger(numSquares) 
        && numSquares >= 16
        && numSquares <= 100 ) 
    {
        keepAsking = false;
    } else {
        alert("Invalid input. Please input a number in the range: 16 - 100")
    }
}

// Calculate pixels per side of square
let squareWidth = GRID_SIZE / numSquares;

// Load starter grid
container.style.width = `${GRID_SIZE}px`;
for (let i = 0; i < numSquares; i++) {
    for (let j = 0; j < numSquares; j++) {
        const square = document.createElement("div");
        square.classList.add("pixel");
        square.style.height = square.style.width = `${squareWidth}px`;
        container.appendChild(square);
    }
}

// Track mouse over grid
container.addEventListener("mouseover", (e) => {
    let red = Math.random() * 255;
    let green = Math.random() * 255;
    let blue = Math.random() * 255;
    e.target.style.backgroundColor = `rgb(${red},${green},${blue})`;
})
