import Character from "./init";
function generateGrid(container) {
  for (let i = 0; i < 4; i++) {
    const row = document.createElement("div");
    row.classList.add("grid-row");
    for (let j = 0; j < 4; j++) {
      const cell = document.createElement("div");
      cell.classList.add("grid-cell");
      row.appendChild(cell);
    }
    container.appendChild(row);
  }
}

const container = document.querySelector(".grid-container");
generateGrid(container);

const Game = new Character(document.querySelector(".grid-container"));
Game.getRandomPosition();
