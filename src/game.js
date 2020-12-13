var dragged;
var x = true;
var y = false;

var validPlaces = ["velar", "bilabial"];

var IPArules = {
  'ksymbol': { place: ['velar'] },
  'psymbol': { place: ['bilabial'] },
  'csymbol': { place: ['palatal'] },
  'tsymbol': { place: ['alveolar'] }
};


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
  if (canCheck(data)) {
    event.target.style.background = '#006400';
  }
  else {
    event.target.style.background = '#8B0000';
  }
}

function drop0(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data));
}

function canCheck(symbol) {
 // var rules = IPArules[symbol];
 // var validPlaces = rules.place;
  if (validPlaces.includes(symbol)) {
    return true;
  }
  return false;
}

function dragLeave(event) {
  event.target.style.background='';
}

function changeText() {
  document.getElementById('demo').innerHTML='Wow! Some different text!';
}

var p_symbol = {place:"bilabial", manner:"plosive", voicing:"voiceless", nasality:"oral"};
var k_symbol = {place:"velar", manner:"plosive", voicing:"voiceless", nasality:"oral"};
var c_symbol = {place:"palatal", manner:"plosive", voicing:"voiceless", nasality:"oral"};
var t_symbol = {place:"alveolar", manner:"plosive", voicing:"voiceless", nasality:"oral"};
