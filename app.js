const container = document.querySelector('.container');
let input = parseInt(prompt('Which grid dimensions?'))
let boxes = input * input;
const divs = container.childNodes;
let containerWidth = container.clientWidth;
let boxWidth = containerWidth / input;
let boxWidthStr = boxWidth.toString();



for(let i = 1; i <= boxes; i++){
    container.appendChild(document.createElement('div')); 
};

for(div of divs){
     div.style.width = `${boxWidthStr}px`;
     div.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'black';
    })
};



