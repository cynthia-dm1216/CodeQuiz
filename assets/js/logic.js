// variables to reference DOM elements
var startQuiz = document.getElementById("start");
var questions = document.getElementById("questions");
var questionsSubmit = document.getElementById("results");
var score = document.getElementById('score');
var timer = document.getElementById("timer");


var score = 0;
var secondsLeft = 60;
var currentQuestionsIndex = 0;

//putting the answer into a sting ""
function nextQuestion(whatTheUserClicked){
  var correctText = questions[currentQuestionsIndex].answer;

  if (whatTheUserClicked === correctText) {
    console.log("Correct");
    score++;
  }else {
    console.log("Sorry, Try again");
  }
  currentQuestionsIndex++;
  getNewQuestion(currentQuestionsIndex);
}


function answerCLick() {
  //console.log(answerCLick);
  var a = document.getElementById("answer1");
  var b = document.getElementById("answer2");
  var c = document.getElementById("answer3");
  var d = document.getElementById("answer4");

  //adding eventListener and click handlers for the answer variables
  a.addEventListener("click",function() {nextQuestion(a.innerText);});
  b.addEventListener("click",function() {nextQuestion(b.innerText);});
  c.addEventListener("click",function() {nextQuestion(c.innerText);});
  d.addEventListener("click",function() {nextQuestion(d.innerText);});
}
answerCLick();

startQuiz.addEventListener("click",function() {
  getNewQuestion(currentQuestionsIndex);
});

var currentQuestions;
function getNewQuestion(questionIndex) {
  var question = questionsArr[questionIndex];
  currentQuestions = question;
  var title = question.title;
  //console.log(title);
  var questionEl = document.getElementById("question");
  questionEl.innerText = title;
}

var choice1 = questionsArr[0].choices;
//console.log(questionsArr[0].choices);
var answerEl1 = document.getElementById("answer1");
answerEl1.innerText = choice1;
console.log(choice1);

