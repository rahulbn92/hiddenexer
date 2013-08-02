var digitKeys     = document.getElementsByClassName('keysContainingText');
var textScreen     = document.getElementById('text');
var operatorKeys   = document.getElementsByClassName('keysContainingOperator');
var resultKey      = document.getElementById('keyResult');
var clear          = document.getElementById('clear');
var MRKey          = document.getElementById('MRKey');
var MPlusKey       = document.getElementById('M+Key');
var MMinusKey      = document.getElementById('M-Key');
var MCKey          = document.getElementById('MCKey');
var signKey        = document.getElementById('signKey');
var decimalKey     = document.getElementById('decimalKey');
var operater;
var memoryPlus;
var string1;
var result;
var string2 ;

window.onload = function() {
  for(var i = 0 ; i < digitKeys.length ; i++) {
    digitKeys[i].onclick = function() {
      var input = new insertNumber(this.value);
    }
  }
}

// function for inserting digit on screen
function insertNumber(number) {
  if(!string1) {
    textScreen.value = "";
  }
  textScreen.value += number;
  if(!operater) {
   string1 = textScreen.value;
  }
  else {
    string2 = textScreen.value;
  }
}

// clicking operater keys
for(var j = 0 ; j < operatorKeys.length ; j++) {
  operatorKeys[j].onclick = function() {
    if(string1 || result)  {
      var operatorClick = new  enterOperator(this.value);
    }
  }
}

// function for inserting operator
function enterOperator(currentOperater) {
  textScreen.value = currentOperater ;
  operater = currentOperater ;
  textScreen.value = "";
}

// function for showing result
resultKey.onclick = function() {
  textScreen.value = "";
  if(!result) {
    if(operater == "+") {
      textScreen.value =    parseFloat(string1)  + parseFloat(string2);
    }
    else if( operater == "-") {
      textScreen.value =    (parseFloat(string1)) - (parseFloat(string2));
    }
    else if( operater == "x") {
      textScreen.value =    (parseFloat(string1)) * (parseFloat(string2));
    }
    else {
     textScreen.value =    (parseFloat(string1)) / (parseFloat(string2));
    }
    operater =null;
    string1 = null;
    string2 = null;
    result = parseFloat(textScreen.value);
  }
  else{
    if(operater == "+") {
      textScreen.value =    parseFloat(result)  + parseFloat(string2);
    }
    else if( operater == "-") {
      textScreen.value =    (parseFloat(result)) - (parseFloat(string2));
    }
    else if( operater == "x") {
      textScreen.value =    (parseFloat(result)) * (parseFloat(string2));
    }
    else {
      textScreen.value =    (parseFloat(result)) / (parseFloat(string2));
    }
    operater =null;
    string1 = null;
    string2 = null;
    result = parseFloat(textScreen.value);
  }
}

// function for deleting wrong digit
clear.onclick = function() {
  var digitArray = textScreen.value.split("");
  var lastDigit = (digitArray.length-1);
  digitArray.pop(digitArray.indexOf(digitArray[lastDigit],1));
  textScreen.value = digitArray.join("");
  if(operater) {
    var string2DigitArray = string2.split("");
    string2DigitArray.pop(string2DigitArray.indexOf(string2DigitArray[length-1],1));
    string2 = string2DigitArray.join("");
  }
  else {
    var string1DigitArray = string1.split("");
    string1DigitArray.pop(string1DigitArray.indexOf(string1DigitArray[length-1],1));
    string1 = string1DigitArray.join("");
  }
}

// function for m+ key operation
MPlusKey.onclick = function() {
  if(!memoryPlus) {
    memoryPlus = parseFloat(textScreen.value);
  }
  else {
    memoryPlus = parseFloat(memoryPlus) + parseFloat(textScreen.value);
    textScreen.value = memoryPlus; 
  }
}

// function for signkey 
signKey.onclick = function() {
  textScreen.value = -parseFloat(textScreen.value);
  if(!string2) {
    string1 = -parseFloat(string1);
  }
  else {
    string2 = -parseFloat(string2);
  }
}

// function for m- key operation 
MMinusKey.onclick = function() {
  if(!memoryPlus) {
    memoryPlus = parseFloat(textScreen.value);
  }
  else {
    memoryPlus = parseFloat(memoryPlus) - parseFloat(textScreen.value);
    textScreen.value = memoryPlus; 
  }
}

// function for memory clear
MCKey.onclick = function() {
  memoryPlus = null;
}

// function for showing current memort status
MRKey.onclick = function() {
  textScreen.value = memoryPlus;
}

