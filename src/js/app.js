import Character from "./init";

const Game = new Character(document.querySelector(".grid-container"));
Game.init();
Game.getRandomPosition();
