const body = document.querySelector("body");
const container = document.querySelector(".container");
const divs = container.childNodes;
let input = 0;
let boxes = input * input;
let containerWidth = container.clientWidth;
let boxWidth = (containerWidth / input).toString();
let resetBtn = document.querySelector(".reset");
let newInput;
let newBoxes;
let newBoxWidth;
let newBoxWidthStr;

window.addEventListener("load", firstMake);
resetBtn.addEventListener("click", newGrid);

function firstMake() {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
  while (input < 2 || input > 64) {
    input = parseInt(prompt("Which grid dimensions? (Maximum 64) 2"));
    boxes = input * input;
    boxWidth = (containerWidth / input).toString();
  }
  makeBoxes(boxes, boxWidth);
}

function newGrid() {
  newInput = parseInt(prompt("Which grid dimensions? (Maximum 64) 1"));
  newBoxes = newInput * newInput;
  newBoxWidth = (containerWidth / newInput).toString();
  while (newInput < 2 || newInput > 64) {
    newInput = parseInt(prompt("Which grid dimensions? (Maximum 64)"));
    newBoxes = newInput * newInput;
    newBoxWidth = (containerWidth / newInput).toString();
  }
  makeBoxes(newBoxes, newBoxWidth);
}

function makeBoxes(boxCount, boxSize) {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
  for (let i = 1; i <= boxCount; i++) {
    container.appendChild(document.createElement("div"));
  }

  for (div of divs) {
    div.style.width = `${boxSize}px`;
    div.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "black";
    });
  }
}
