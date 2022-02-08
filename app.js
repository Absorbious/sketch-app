const body = document.querySelector("body");
const container = document.querySelector(".container");
const rainbowBtn = document.querySelector(".rainbow");
const resetBtn = document.querySelector(".reset");
const blackBtn = document.querySelector(".black");
const divs = container.childNodes;
const slider = document.querySelector(".slider");
const sliderVal = document.querySelector(".sliderVal");

let input = parseInt(slider.value);
let blackRgb = 0;
let boxes = input * input;
let containerWidth = container.clientWidth;
let boxWidth = (containerWidth / input).toString();
let newInput;
let newBoxes;
let newBoxWidth;
let newBoxWidthStr;

sliderVal.innerHTML = `${slider.value} x ${slider.value}`
slider.addEventListener('change', function(){
  sliderVal.innerHTML = `${slider.value} x ${slider.value}`
  input = slider.value;
  boxes;
  boxWidth;
  makeBoxes(boxes, boxWidth);
})

let num = () => {
  return Math.floor(Math.random() * 255) + 1;
};

window.addEventListener("load", firstMake);
resetBtn.addEventListener("click", newGrid);
rainbowBtn.addEventListener("click", rainbow);
blackBtn.addEventListener("click", black);

function firstMake() {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
  // while (input < 2 || input > 64) {
  //   input = parseInt(prompt("Which grid dimensions? (Maximum 64)"));
  //   boxes = input * input;
  //   boxWidth = (containerWidth / input).toString();
  // }
  makeBoxes(boxes, boxWidth);
}

function newGrid() {
  newInput = parseInt(prompt("Which grid dimensions? (Maximum 64)"));
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
    console.log('removed divs')
  }
  for (let i = 1; i <= boxCount; i++) {
    container.appendChild(document.createElement("div"));
    console.log('created divs')
  }

  for (div of divs) {
    div.style.width = `${boxSize}px`;
    div.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = `rgb(${blackRgb}, ${blackRgb}, ${blackRgb})`;
    });
    console.log('for every div')
  }
}

function rainbow() {
  for (div of divs) {
    div.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = `rgb(${num()}, ${num()}, ${num()})`;
    });
  }
}

function black() {
  for (div of divs) {
    div.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = `rgb(${blackRgb}, ${blackRgb}, ${blackRgb})`;
    });
  }
}

function lighten() {
  for (div of divs) {
    div.addEventListener("mouseover", (e) => {
      console.log(
        (e.target.style.backgroundColor = `rgb(${blackRgb + 50}, ${
          blackRgb + 10
        }, ${blackRgb + 50})`)
      );
    });
  }
}
