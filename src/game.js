function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data));
}

const manners = ['plosive', 'fricative']
const places = ['bilabial', 'alveolar', 'palatal', 'velar']
const rules = {
  k-symbol: {
    place: ['velar'],
    manner: ['plosive']
},
  p-symbol: {
     place: ['bilabial'],
     manner: ['plosive']
},
  c-symbol: {
     place: ['palatal'],
     manner: ['plosive']
},
  t-symbol: {
     place: ['alveolar'],
     manner: ['plosive']
}
};
