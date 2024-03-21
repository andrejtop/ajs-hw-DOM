export default class Character {
  constructor(elem) {
    this.cell = elem.querySelectorAll(".grid-cell");
    this.icon = elem.querySelector(".icon");
  }

  init() {
    const container = document.querySelector(".grid-container");

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
  getRandomPosition() {
    let previous = 0;
    let i = 0;

    setInterval(() => {
      while (i === previous) {
        i = Math.floor(Math.random() * (this.cell.length - 1));
      }

      previous = i;
      this.cell[i].appendChild(this.icon);
    }, 1000);
  }
}
