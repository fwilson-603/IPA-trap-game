var dragged;

var IPArules = {
  'k symbol': { place: ['velar'] }
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
  var IPAsymbol = target.alt;
  if (canCheck(IPAsymbol)) {
    event.target.style.background = '#006400';
  }
  else {
    event.target.style.background = '#8B0000';
  }
}

function canCheck(symbol) {
  var rules = IPArules[symbol];
  var validPlaces = rules.place;
  if (validPlaces == event.target.id) {
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
