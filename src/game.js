var dragged;

var dataTEST = 'ksymbol';
var boxArrayTEST = ['ksymbol'];
var testTEST = boxArrayTEST.indexOf(dataTEST);
function testFunction() {
	document.getElementById("test1").innerHTML = testTEST;
}
	
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

var plosiveBox = ['ksymbol', 'psymbol', 'csymbol', 'tsymbol'];
var alveolarBox = ['tsymbol'];
var bilabialBox = ['psymbol'];
var palatalBox = ['csymbol'];
var velarBox = ['ksymbol'];
var fricativeBox = [];

function foo() {
  alert('foo');
}

function pageLoad() {
  randomizeSymbols();
  generateDescriptors();
  //testFunction();
}

function generateDescriptors() {
 	for (i=0; i<descriptorNames.length; i++) {
   		var descriptor = document.createElement('div');
   		var name = descriptorNames[i];
   		descriptor.id = name;
  		descriptor.className = 'IPAsymbol';
   		descriptor.innerHTML = name;
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
	event.preventDefault(); //prevents the default drag-and-drop disallowed
	var data = event.dataTransfer.getData("text"); //puts the data stored by the drag(event) function (the dragged object's id) in 'data'
	var test; //creates the variable 'test'
	var boxId = event.target.id; //creates the variable 'boxId', containing the id of the target (i.e. the box being dropped into)
	var boxAllow = window[boxId]; //creates the variable 'boxAllow', containing the contents of the global variable called by the contents of 'boxId',
	//this should be an array of the acceptable ids that the box will let pass.
	event.target.appendChild(document.getElementById(data)); //adds the dragged object to the target (the box)
	test = boxAllow.indexOf(data); //if the dragged item's id is in the array of allowed items, 'test' will be set to 0 or higher, if not, 'undefined'
	document.getElementById("test3").innerHTML = test;
	if (test >= 0) { //this should test if the 'test' variable contains the number 0 or higher, and come back green if so, red if not.
		event.target.style.background = '#006400';
	}
	else {
		event.target.style.background = '#8B0000';
	};
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
