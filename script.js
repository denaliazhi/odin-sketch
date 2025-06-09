const gridSize = 16;
const container = document.querySelector(".container");

for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
        const square = document.createElement("div");
        square.classList.add("pixel");
        container.appendChild(square);
    }
}
