var dragged;

var dataTEST = 'ksymbol';
var boxArrayTEST = ['ksymbol'];
var testTEST = boxArrayTEST.indexOf(dataTEST);
function testFunction() {
	document.getElementById("test1").innerHTML = testTEST;
}

// Leftover from previous code, not needed for drop(event) (I think)
var symbolNames = ['ksymbol', 'csymbol', 'psymbol', 'tsymbol'];
var TESTksymbol = 'k';
var TESTcsymbol = 'c';
var TESTpsymbol = 'p';
var TESTtsymbol = 't';

// To get the second drop(event) function working, use the global variables below
var psymbol = {place:"bilabial", manner:"plosive", voicing:"voiceless", nasality:"oral"};
var ksymbol = {place:"velar", manner:"plosive", voicing:"voiceless", nasality:"oral"};
var csymbol = {place:"palatal", manner:"plosive", voicing:"voiceless", nasality:"oral"};
var tsymbol = {place:"alveolar", manner:"plosive", voicing:"voiceless", nasality:"oral"};

// To get the first drop(event) function working, use the global variables below
var TESTplosiveBox = ['ksymbol', 'psymbol', 'csymbol', 'tsymbol'];
var TESTalveolarBox = ['tsymbol'];
var TESTbilabialBox = ['psymbol'];
var TESTpalatalBox = ['csymbol'];
var TESTvelarBox = ['ksymbol'];
var TESTfricativeBox = [];

// To get the second drop(event) function working, use the global variables below
var plosiveBox = ['plosive'];
var alveolarBox = ['alveolar'];
var bilabialBox = ['bilabial'];
var palatalBox = ['palatal'];
var velarBox = ['velar'];
var fricativeBox = ['fricative'];

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

var test = 'foo';

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

// Function below needs global variables of the type: var velarBox = ['ksymbol'];
// This is the first drop(event) function

function TESTdrop(event) {
	event.preventDefault(); //prevents the default drag-and-drop disallowed
	var data = event.dataTransfer.getData("text"); //puts the data stored by the drag(event) function (the dragged object's id) in 'data'
	var test; //creates the variable 'test'
	var boxId = event.target.id; //creates the variable 'boxId', containing the id of the target (i.e. the box being dropped into)
	var boxAllow = window[boxId]; //creates the variable 'boxAllow', containing the contents of the global variable called by the contents of 'boxId',
	//this should be an array of the acceptable ids that the box will let pass.
	event.target.appendChild(document.getElementById(data)); //adds the dragged object to the target (the box)
	test = boxAllow.indexOf(data); //if the dragged item's id is in the array of allowed items, 'test' will be set to 0 or higher, if not, 'undefined'
	if (test >= 0) { //this should test if the 'test' variable contains the number 0 or higher, and come back green if so, red if not.
		event.target.style.background = '#006400';
	}
	else {
		event.target.style.background = '#8B0000';
	};
}

// For testing: document.getElementById("test3").innerHTML = test;

// Function below needs global variables of the types:
// var velarBox = ['velar']
// var ksymbol = {place:'velar', manner:'plosive', voicing:'voiceless'}
// This is the second drop(event) function

function drop(event) {
	event.preventDefault(); //prevent default drag-and-drop cancel
	var data = event.dataTransfer.getData("text"); //dragged object ID
	var boxId = event.target.id; //box object ID
	var symbolArray = window[data]; //set symbolArray to the contents of the global variable that is the dragged object ID
	var boxArray = window[boxId]; //set boxArray to the contents of the global variable that is the box object ID
	var x; //empty variable for the 'for' loop later
	var count = 0; //define a variable 'count' as 0 to increment later
	event.target.appendChild(document.getElementById(data)); //append the dragged object to the div box
	for (x in symbolArray) {	// loop through the symbolArray
		if (symbolArray[x] == boxArray[0]) {	// if the current item in the symbol array is the same as the first item in the boxArray
			count++;	// increment the 'count' variable by 1
		}
	};
	if (count > 0) {	// if the 'count' variable is greater than 0 (has been incremented, i.e. a match was found)
		event.target.style.background = '#006400';	// set the box background to green
	}
	else {
		event.target.style.background = '#8B0000';	// otherwise set the box background to red
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
