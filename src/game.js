var dragged;

var symbolNames = ['ksymbol', 'csymbol', 'psymbol', 'tsymbol'];
var ksymbol = 'k';
var csymbol = 'c';
var psymbol = 'p';
var tsymbol = 't';

var descriptorNames = ['plosive', 'alveolar', 'velar', 'voiced'];

var validPlaces = ["velar", "bilabial"];

var data1 = "velar"

var IPArules = {
  'ksymbol': { place: ['velar'] },
  'psymbol': { place: ['bilabial'] },
  'csymbol': { place: ['palatal'] },
  'tsymbol': { place: ['alveolar'] }
};

var IPArules2 = ['velar'];

var p_symbol = {place:"bilabial", manner:"plosive", voicing:"voiceless", nasality:"oral"};
var k_symbol = {place:"velar", manner:"plosive", voicing:"voiceless", nasality:"oral"};
var c_symbol = {place:"palatal", manner:"plosive", voicing:"voiceless", nasality:"oral"};
var t_symbol = {place:"alveolar", manner:"plosive", voicing:"voiceless", nasality:"oral"};

var test = 'foo';

function foo() {
  alert('foo');
}

function pageLoad() {
  randomizeSymbols();
  generateDescriptors();
}

function generateDescriptors() {
  for (i=0; i<descriptorNames.length; i++) {
   var descriptor = document.createElement('div');
   var name = descriptorNames[i];
   descriptor.id = name;
   descriptor.className = 'descriptor';
   descriptor.innerHTML = window[name];
   descriptor.draggable = "true";
    // will need to add an event listener to get it to do anything when dragged
   document.getElementById("descriptorTest").appendChild(descriptor);
  }
}

function generateSymbols() {
	var btn = document.getElementById("symbolButton");
	for (i=0; i<symbolNames.length; i++) {
		var symbol = document.createElement('div');
		var name = symbolNames[i];
		symbol.id = name;
		symbol.className = 'IPAsymbol';
		symbol.innerHTML = window[name];
		symbol.draggable = "true";
		symbol.addEventListener("dragstart", function() {
			drag(event);
		});
		document.getElementById("symbolTest").appendChild(symbol);
	}
	btn.remove();
}

function randomizeSymbols() {
  var i;
  var j;
  var k;
  for (i = symbolNames.length -1; i > 0; i--) {
    j = Math.floor(Math.random() * i);
    k = symbolNames[i];
    symbolNames[i] = symbolNames[j];
    symbolNames[j] = k;
  }
}

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
