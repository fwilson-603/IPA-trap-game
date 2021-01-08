var dragged;

var symbolNames = ['ksymbol', 'csymbol', 'psymbol', 'tsymbol'];
var descriptorNames = ['plosive', 'alveolar', 'velar', 'voiced'];

var psymbol = {place:"bilabial", manner:"plosive", voicing:"voiceless", nasality:"oral"};
var ksymbol = {place:"velar", manner:"plosive", voicing:"voiceless", nasality:"oral"};
var csymbol = {place:"palatal", manner:"plosive", voicing:"voiceless", nasality:"oral"};
var tsymbol = {place:"alveolar", manner:"plosive", voicing:"voiceless", nasality:"oral"};

var plosiveBox = ['plosive'];
var alveolarBox = ['alveolar'];
var bilabialBox = ['bilabial'];
var palatalBox = ['palatal'];
var velarBox = ['velar'];
var fricativeBox = ['fricative'];

function pageLoad() {
  randomizeSymbols();
  generateDescriptors();
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

// For testing: document.getElementById("test3").innerHTML = test;

// Function below needs global variables of the types:
// var velarBox = ['velar']
// var ksymbol = {place:'velar', manner:'plosive', voicing:'voiceless'}
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

function dragLeave(event) {
  event.target.style.background='';
}
