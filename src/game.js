var dragged;

var validPlaces = ["velar", "bilabial"];

var data1 = "velar"

var IPArules = {
  'ksymbol': { place: ['velar'] },
  'psymbol': { place: ['bilabial'] },
  'csymbol': { place: ['palatal'] },
  'tsymbol': { place: ['alveolar'] }
};

var IPArules2 = ['velar'];




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
  document.getElementById("test1").innerHTML = data;
  var rules = IPArules[data];
  document.getElementById("test2").innerHTML = IPArules2;
  document.getElementById("test3").innerHTML = IPArules2[0];
  var test = validPlaces.indexOf(data1);
  if (test >= 0) {
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
  if (validPlaces.includes(data1)) {
    return true;
  }
  return false;
}

function dragLeave(event) {
  event.target.style.background='';
}

function testTruth() {
  if (validPlaces.includes(data1)) {
  document.getElementById('it').innerHTML="It's true!"
  }
  else {
  document.getElementById('it').innerHTML="It's false!"
  }
}

var p_symbol = {place:"bilabial", manner:"plosive", voicing:"voiceless", nasality:"oral"};
var k_symbol = {place:"velar", manner:"plosive", voicing:"voiceless", nasality:"oral"};
var c_symbol = {place:"palatal", manner:"plosive", voicing:"voiceless", nasality:"oral"};
var t_symbol = {place:"alveolar", manner:"plosive", voicing:"voiceless", nasality:"oral"};
