var digitKeys      = document.getElementsByClassName('keysContainingText');
var textScreen     = document.getElementById('text');
var operaterKey    = document.getElementsByClassName('keysContainingOperator');
var resultKey      = document.getElementById('keyResult');
var clear          = document.getElementById('clear');
var MRKey          = document.getElementById('MRKey');
var MPlusKey       = document.getElementById('M+Key');
var MMinusKey      = document.getElementById('M-Key');
var MCKey          = document.getElementById('MCKey');
var signKey        = document.getElementById('signKey');
var decimalKey     = document.getElementById('decimalKey');
var clearAll       = document.getElementById("clearAll");
var operater;
var memoryPlus = 0;
var count =0;
var result;

window.onload = function() {
  for(var i = 0 ; i < digitKeys.length ; i++) {
    digitKeys[i].onclick = function() {
      var input = new insertNumber(this.value);
    }
  }  
  for(var i = 0 ; i < operaterKey.length ; i++) {
    operaterKey[i].onclick = function() {
      var input = new insertOperater(this.value);
    }
  }
}

// function for inserting digit on screen
function insertNumber(number) {
  if(result == null && text.value != "malformed Expression"){
    textScreen.value += number;
  }
  else  {
    result = null;
    textScreen.value = "";
    textScreen.value += number;
  }
}

// function for result key
resultKey.onclick =  function() {
  var digits = textScreen.value.split("");
  var inputLength = digits.length;
  if(digits[0] == "*" || digits[0] == "/") {
    textScreen.value = "malformed Expression";
  }
  else if(digits[inputLength-1] == "*" || digits[inputLength-1] == "/" || digits[inputLength-1] == "+" || digits[inputLength-1] == "-" ) {
    textScreen.value = "malformed Expression";
  }
  else {
    result = eval(textScreen.value);
    textScreen.value = result;
  }
}

// function for inserting operator
function insertOperater(operator) {
  var digits = textScreen.value.split("");
  var inputLength = digits.length;
  if(digits[inputLength-1] != "*" && digits[inputLength-1] != "/" && digits[inputLength-1] != "+" && digits[inputLength-1] != "-" && textScreen.value!= "malformed Expression" ) {
    textScreen.value += operator;
    count = 0;
    result = null;
  }
}

// function for clearing last entered digit
clear.onclick = function() {
  var digits = textScreen.value.split("");
  var inputLength = digits.length;
  if(digits[inputLength-1] == ".") {
    count--;
  }
  digits.pop(digits[inputLength-1]);
  textScreen.value = digits.join("");
}

// function for changing the sign
signKey.onclick = function() {
  textScreen.value = -(eval(textScreen.value)); 
}

// function for m+ key
MPlusKey.onclick = function() {
  memoryPlus = memoryPlus + result;
  textScreen.value = memoryPlus;
}

// function for m- key
MMinusKey.onclick = function() {
  memoryPlus = memoryPlus - result;
  textScreen.value = memoryPlus;
}

// function for MC key
MCKey.onclick = function() {
  memoryPlus = 0;
}

// function for MR key
MRKey.onclick = function() {
  textScreen.value = memoryPlus;
}

// function for decimal key
decimalKey.onclick = function() {
  if( count == 0) {
    textScreen.value += decimalKey.value;
    count++;
  } 
  if(result != null || textScreen.value == "") {
    count = 0;
  }
}

// function for clearAll key
clearAll.onclick = function() {
  textScreen.value = "";
  count = 0 ;
}

