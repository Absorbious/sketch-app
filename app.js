const body = document.querySelector('body');
const container = document.querySelector('.container');
let input = parseInt(prompt('Which grid dimensions?'))
let boxes = input * input;
const divs = container.childNodes;
let containerWidth = container.clientWidth;
let boxWidth = (containerWidth / input).toString();
//let boxWidthStr = boxWidth.toString();
let resetBtn = document.querySelector('.reset');
let newInput;
let newBoxes;
let newBoxWidth;
let newBoxWidthStr;

body.addEventListener('onload', makeBoxes(boxes, boxWidth));

resetBtn.addEventListener('click', () => {
    while(container.firstChild){
        container.removeChild(container.lastChild);
    };

    newInput = parseInt(prompt('Which grid dimensions?'));
    newBoxes = newInput * newInput;
    newBoxWidth = (containerWidth / newInput).toString();
    makeBoxes(newBoxes, newBoxWidth);
})


function makeBoxes(boxCount, boxSize){
    for(let i = 1; i <= boxCount; i++){
        container.appendChild(document.createElement('div')); 
    };
    
    for(div of divs){
         div.style.width = `${boxSize}px`;
         div.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'black';
        })
    };
    
}




