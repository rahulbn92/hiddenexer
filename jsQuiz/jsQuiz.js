var questionBox     = document.getElementById('questionBox');
var nextButton      = document.getElementById('next');
var solutionBox     = document.getElementById('solutions');
var timer           = document.getElementById('time');
var answer          = document.getElementById('answer');
var score           = document.getElementById('score');
var questionNumber  = document.getElementById('questionNumber');
var table           = document.getElementById('summary');
var count = 0;
var timeLeft = 15;
var correctAnswer = 0 ;

window.onload = function() {
  var newQuestion = new question();
  var setTime = new setTimer();
}
  
// function for showing question
function question() { 
  count++;
  if(count < 21) {
    questionNumber.innerHTML = "QUES: " + count;
    answer.value = "";
    questionBox.innerHTML = Math.floor((Math.random()*20) +1)  + " ";
    var number = Math.floor((Math.random()*4) +1);
    var operator;
    switch(number) {
      case 1: operator = "+";
              break;
      case 2: operator = "-";
              break;
      case 3: operator = "*";
              break;
      case 4: operator = "/";
              break;
    }
    questionBox.innerHTML += operator + " ";
    questionBox.innerHTML +=  Math.floor((Math.random()*20)+1);
  }
  else {
    solutionBox.style.display = "block";
    clearTimeout(myTimer);
    timer = 0;
    timer.innerHTML = "";
    score.remove();
    nextButton.remove();
    answer.remove();
    questionBox.innerHTML = "FINAL SCORE  " + correctAnswer;
  }
}

// function for setting timer
function setTimer() {
  myTimer = setTimeout(setTimer, 1000);
  timer.innerHTML = " time left : " + timeLeft-- + " secs";
  if(timeLeft == -1) {
    clearTimeout(myTimer);
    timer.innerHTML = "";
    timeLeft = 15;
    var buttonNextAutoClick = new nextQuestion(); 
  }
}

// event handler for nextButton
nextButton.onclick =  function() {
  var buttonNextAutoClick = new nextQuestion();
}

// function for showing next question
function nextQuestion() {
  var evaluateAnswer = new answerEvaluation();
  var newQuestion = new question();
  clearTimeout(myTimer);
  timer.innerHTML = "";
  timeLeft = 15;
  var setTime = new setTimer();
}

// function for evaluating answer
function answerEvaluation() {
  var result = eval(questionBox.innerHTML);
  if(result == answer.value) {
    correctAnswer++;
    score.innerHTML = "SCORE = " + correctAnswer;
  }
  else {
    score.innerHTML = "SCORE = " +correctAnswer;
    var showSolutions = new solutionShow();  
  }
}

// function for showing summary for test
function solutionShow() {
  var wrongEntry =  table.appendChild(document.createElement('tr'));
  var questionnum = wrongEntry.appendChild(document.createElement('td'));
  questionnum.innerHTML = count;
  var answerWrong =  wrongEntry.appendChild(document.createElement('td'));
  answerWrong.innerHTML = questionBox.innerHTML;
  var ourWrongAnswer = wrongEntry.appendChild(document.createElement('td'));
  ourWrongAnswer.innerHTML = answer.value;
  var correctAns = wrongEntry.appendChild(document.createElement('td'));
  correctAns.innerHTML = eval(questionBox.innerHTML);  
}


