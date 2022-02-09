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

let num = () => {
  return Math.floor(Math.random() * 255) + 1;
};

window.addEventListener("load", firstMake);
slider.addEventListener('change', updateBoxes)
resetBtn.addEventListener("click", updateBoxes);
rainbowBtn.addEventListener("click", rainbow);
blackBtn.addEventListener("click", black);

slider.addEventListener('input', () => {sliderVal.innerHTML = `${slider.value} x ${slider.value}`});

function updateBoxes(){
  boxes = slider.value * slider.value
  boxWidth = (containerWidth / slider.value).toString();
  makeBoxes(boxes, boxWidth);
}

function firstMake() {
  sliderVal.innerHTML = `${slider.value} x ${slider.value}`
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
  makeBoxes(boxes, boxWidth);
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
