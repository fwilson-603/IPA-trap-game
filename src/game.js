var dragged;

var symbolNames = ['ksymbol', 'csymbol', 'psymbol', 'tsymbol'];
var descriptorNames = ['plosive', 'alveolar', 'velar', 'voiced'];

var psymbol = {img:"p", status:"unchecked", place:"bilabial", manner:"plosive", voicing:"voiceless", nasality:"oral"};
var ksymbol = {img:"k", status:"unchecked", place:"velar", manner:"plosive", voicing:"voiceless", nasality:"oral"};
var csymbol = {img:"c", status:"unchecked", place:"palatal", manner:"plosive", voicing:"voiceless", nasality:"oral"};
var tsymbol = {img:"t", status:"unchecked", place:"alveolar", manner:"plosive", voicing:"voiceless", nasality:"oral"};

//need to be changed: no longer these names for id
var plosiveBox = ['plosive'];
var alveolarBox = ['alveolar'];
var bilabialBox = ['bilabial'];
var palatalBox = ['palatal'];
var velarBox = ['velar'];
var fricativeBox = ['fricative'];

var dropBox1Symbols;
var dropBox2Symbols;
var dropBox3Symbols;
var dropBox4Symbols;
var dropBox5Symbols;
var dropBox6Symbols;
var boxes = ['dropBox1', 'dropBox2', 'dropBox3', 'dropBox4', 'dropBox5', 'dropBox6'];

var dropBox1Descriptors = [];
var dropBox2Descriptors = [];
var dropBox3Descriptors = [];
var dropBox4Descriptors = [];
var dropBox5Descriptors = [];
var dropBox6Descriptors = [];

function pageLoad() {
  generateDescriptors();
  randomizeSymbols();
}

function generateDescriptors() {
 	for (i=0; i<descriptorNames.length; i++) {
   		var descriptor = document.createElement('div');
   		var name = descriptorNames[i];
   		descriptor.id = name;
  		descriptor.className = 'IPAsymbol'; //should be a 'descriptor' class
   		descriptor.innerHTML = name;
   		descriptor.draggable = "true";
		descriptor.addEventListener("dragstart", function () {
			drag(event);
		});
   		document.getElementById("descriptorTest").appendChild(descriptor);
  }
}

function doEverythingSymbols() {
	assignSymbols();
	generateSymbols();
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

function assignSymbols() { //assign the symbols in the array symbolNames to separate dropboxes
	dropBox1Symbols = symbolNames.slice(0,10);
	dropBox2Symbols = symbolNames.slice(10,20);
	dropBox3Symbols = symbolNames.slice(20,30);
	dropBox4Symbols = symbolNames.slice(30,40);
	dropBox5Symbols = symbolNames.slice(40,50);
	dropBox6Symbols = symbolNames.slice(50,60);
}

function generateSymbols() { //in progress new function
	for (i=0; i<dropBox1Symbols.length; i++) {
		var symbol = document.createElement('div');
		var name = dropBox1Symbols[i];
		symbol.id = name;
		symbol.className = 'IPAsymbol';
		symbol.innerHTML = window[name]["img"];
		symbol.draggable = "true";
		symbol.addEventListener("dragstart", function() {
			drag(event);
		});
		document.getElementById("dropBox1").appendChild(symbol);
	}
}

function TESTgenerateSymbols(dropBoxX) { //in progress: separating out the function
	var x = dropBoxX + 'Symbols'; // suspicious of this part
	var boxSymbolsArray = window[x];
	for (i=0; i<boxSymbolsArray.length; i++) {
		var symbol = document.createElement('div');
		var name = boxSymbolsArray[i];
		symbol.id = name;
		symbol.className = 'IPAsymbol';
		symbol.innerHTML = window[name]["img"];
		symbol.draggable = "true";
		symbol.addEventListener("dragstart", function() {
			drag(event);
		});
		document.getElementById(dropBoxX).appendChild(symbol);
	};
}

function TESTgenerateSymbols() {
	var btn = document.getElementById("symbolButton");
	for (i=0; i<symbolNames.length; i++) {
		var symbol = document.createElement('div');
		var name = symbolNames[i];
		symbol.id = name;
		symbol.className = 'IPAsymbol';
		symbol.innerHTML = window[name]["img"];
		symbol.draggable = "true";
		symbol.addEventListener("dragstart", function() {
			drag(event);
		});
		document.getElementById("symbolTest").appendChild(symbol);
	}
	btn.remove();
}

function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

// For testing: document.getElementById("test3").innerHTML = test;

// Function below will currently not work (variables misnamed globally)
// Function below needs global variables of the types:
// var velarBox = ['velar']
// var ksymbol = {place:'velar', manner:'plosive', voicing:'voiceless'}
//this is now test, but it's the most recent working model
function TESTdrop(event) {
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

//new drop(event) function, this one checking descriptors, not symbols
//currently set to only work for dropBox1
function drop(event) {
	event.preventDefault(); //prevent default drag-and-drop cancel
	var data = event.dataTransfer.getData("text"); //descriptor object Id
	dropBox1Descriptors.push(data); //add the dropped element to the array of descriptors for the dropBox
	event.target.appendChild(document.getElementById(data)); //append the dragged object to the div box
	for (i=0; i<dropBox1Symbols.length; i++) { //loop through the full length of dropBox1symbols
		//goal: remove the contents of this loop and make it a separate function which can be called independently
		var count = 0; //set the variable 'count' to 0
		var symbol = dropBox1Symbols[i]; //set a variable to the current symbol id
		var symbolObject = window[symbol]; //set a variable to the contents of the global variable named for the symbol id
		for (x in symbolObject) { //loop through the contents of the object for the symbol
			if (dropBox1Descriptors.includes(symbolObject[x])) { //if the dropBox descriptors array contains the value
				count++; //increment the count variable
			};
		};
		if (count > 0) {
			window[symbol].status = 'checked'; //set the status on the symbol to 'checked'
			document.getElementById(symbol).style.backgroundColor = "00ff00"; //make the symbol background green
		}
		else {
			window[symbol].status = 'unchecked'; //set the status on the symbol to 'unchecked'
			document.getElementById(symbol).style.backgroundColor = "000000"; //make the symbol background white
		}
	}
	document.getElementById("test1").innerHTML = data;
	document.getElementById("test2").innerHTML = dropBox1Descriptors;
	document.getElementById("test3").innerHTML = dropBox1Symbols;
}


function drop0(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data));
}

function dragLeave(event) {
  event.target.style.background='';
}
