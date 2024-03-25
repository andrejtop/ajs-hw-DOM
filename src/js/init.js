import goblinImage from "../img/goblin.png";

export default class Character {
  constructor() {}

  init() {
    const container = document.createElement("div");
    container.className = "grid-container";

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
    document.body.appendChild(container);

    this.generateImage();
  }

  generateImage() {
    const container = document.getElementsByClassName("grid-container")[0];
    const cells = container.querySelectorAll(".grid-cell");
    const image = document.createElement("img");
    image.src = goblinImage;
    cells[0].appendChild(image);
  }

  getRandomPosition() {
    let previous = 0;

    setInterval(() => {
      let i = Math.floor(Math.random() * 16);

      while (i === previous) {
        i = Math.floor(Math.random() * 16);
      }

      previous = i;
      const container = document.getElementsByClassName("grid-container")[0];
      const cells = container.querySelectorAll(".grid-cell");
      const image = container.querySelector("img");
      cells[i].appendChild(image);
    }, 1000);
  }
}
