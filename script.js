//QUESTIONS 
let questions = [{
    questions : "What is the Capital of Texas?",
    choiceA: "Austin",
    choiceB: "Albany",
    choiceC: "Sacramento",
    correct: "C"
},{
    question: "Which event occurs when the user clicks on an HTML element?",
    choiceA: "onmouseclick",
    choiceB: "onmouseover",
    choiceC: "onclick",
    correct: "C"
},{
    question: "What is the capital of Illinois?",
    choiceA: "Santa Fe",
    choiceB: "Springfield",
    choiceC: "Ottawa",
    correct: "B"
},{
    question: "Which operator is used to assign a value to a variable?",
    choiceA: "*",
    choiceB: ".",
    choiceC: "=",
    correct: "C"
}
];
//Selecting all Elements
const startdiv = document.getElementById("start");
//console.log("start quiz");
// const startButton = document.getElementById('start-btn')
const quiztempdiv = document.getElementById("quiztemplate");
const nextButton = document.getElementById('next-btn');
const choicesdiv = document.getElementById("choices");
const summitButton = document.getElementById('submit');
const questionElement = document.getElementById('question');
const answerButtonElement = document.getElementById('answer-buttons');

let shuffleQuestions, currentQuestionIndex

//Quiz questions & answers Section
var renderQuesdiv = document.getElementById("renderQuesdiv");

// startButton.addEventListener('click', startGame)
// nextButton.addEventListener('click', () => {
//     currentQuestionIndex++
//     setNextQuestion()
// })


// Quiz questions & answers 
var renderQuesdiv = document.getElementById(renderQuesdiv);

//const quiz 
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById('progress');
const scoreDiv = document.getElementById("scoreDiv");
const highScoresDiv = document.getElementById("highscoreDiv");
const gameOverDiv = document.getElementById("gameOverDiv");
const highScoresList = document.getElementById("highScoreList");

//Initial Variable
const lastQuestion = question.length -1;
let runningQuestion = 0;
let count = 0;
const questionTime = 5;
const gaugeWidth = 150;
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;
let scorePercent = 0;
let scores = []

//Functions
initViews();

function initViews() {
    quizPanel.setAttribute("style","display: none;");
    quiztempdiv.setAttribute("style","display: none;");
    startdiv.setAttribute("style","display: none;");
    gameOverDiv.setAttribute("style","display:none;");
    highScoresDiv.setAttribute("style","display:none;");

    getScoresLS = localStorage.getItem("scoresLS");
    scores = getScoresLS ? JSON.parse(getScoresLS): [];
};

function startQuiz() {
    gif.setAttribute("style", "display: none;");
    startdiv.setAttribute("style","display:none;");

    let x = questions[runningQuestion];
    question.innerHTML = `<p><h3>${x.question}</h3></p>`;
    choiceA.innerHTML = x.choiceA;
    choiceB.innerHTML = x.choiceB;
    choiceC.innerHTML = x.choiceC;
};

//render progress
function renderProgress() {
    for(let xIndex = 0; xIndex <= lastQuestion; xIndex++){
        progress.HTML += "<div class= `prog` id=" + xIndex +"></div>";
    }
};

function renderCounter(){
    if(count <= questionTime) {
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    } else{
        count = 0;
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQs();
        }else{
            clearInterval(TIMER);
            scoreRender();
        }
    }
};
//checkingAnswers
function checkAnswer(answer) {
    if(answer == questions[runningQuestion].correct){
        //correct answer
        score++;
        answerIsCorrect();
    }else{
        //end of quiz show Score
        clearInterval(TIMER);
        scoreRender();
    }
};

//answer is correct background color green
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
    };

    //wrong answer backgroung color red
    function answerIsWrong(){
        document.getElementById(runningQuestion).style.backgroundColor = "#f00";
    };

    //score render
    function scoreRender(){
        questiondiv.setAttribute("style","display:none;");
        choicesdiv.setAttribute("style","display:none;");
        progress.setAttribute("style","display:none;");
        timer.setAttribute("style","display:none;");
        quizPanel.setAttribute("style","display:none;");
        gameOverDiv.setAttribute("style","display:none;");

        scoreDiv.style.display = "block";

    }

    //Highscore Render
    function highscoreRender(){
        playerName = document.getElementById("playerInitials").value.trim();
        console.log ("players Name");
    }






