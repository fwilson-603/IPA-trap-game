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
