let dragged;

function onDragStart(event) {
  let target = event.target;
  if (target && target.nodeName === "IMG") {
    dragged = target;
    event.dataTransfer.setData('text', target.id);
    event.dataTransfer.dropEffect = 'move';
    event.target.style.opacity = .3;
}

function onDragEnd(event) {
  if (event.target && event.target.nodeName === "IMG") {
    event.target.style.opacity = '';
    dragged = null;
}
  
const symbols = document.querySelector('.symbols');
symbols.addEventListener('dragstart', onDragStart);
symbols.addEventListener('dragend', onDragEnd);

function onDragOver(event) {
  event.preventDefault();
}
  
function onDragLeave(event) {
  event.target.style.background = '';
}
  
function onDragEnter(event) {
  const target = event.target;
  if (target) {
    event.preventDefault()
    event.dataTransfer.dropEffect = 'move';
    target.style.background = '1#f904e';
  }
}
  
function onDrop(event) {
  const target = event.target;
  if (target) {
    target.style.backgroundColor = '';
    event.preventDefault();
    dragged.parentNode.removeChild(dragged);
    dragged.style.opacity = '';
    target.appendChild(dragged);
  }
}
  
const dropZone = document.querySelector('.dropZone');
dropZone.addEventListener('drop', onDrop);
dropZone.addEventListener('dragenter', onDragEnter);
dropZone.addEventListener('dragleave', onDragLeave);
dropZone.addEventListener('dragover', onDragOver);


const manners = ['plosive', 'fricative']
const places = ['bilabial', 'alveolar', 'palatal', 'velar']
const rules = {
  'k symbol': {
    place: ['velar'],
    manner: ['plosive']
},
  'p symbol': {
     place: ['bilabial'],
     manner: ['plosive']
},
  'c symbol': {
     place: ['palatal'],
     manner: ['plosive']
},
  't symbol': {
     place: ['alveolar'],
     manner: ['plosive']
}
};
