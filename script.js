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
        }
    }
}






// function startGame() {
//     console.log('Started')
//     startButton.classList.add('hide')
//     shuffleQuestions = questions.sort(() => Math.random() - .5)
//     questionContainerElement.classList.remove('hide')
//     currentQuestionIndex = 0
//     finishButton.classList.add('hide')
//     setNextQuestion()

// }

// function setNextQuestion() {
//     resetState()
//     showQuestion(shuffleQuestions[currentQuestionIndex])

// }

// function showQuestion(question) {
//     questionElement.innerText = question.question
//     question.answer.forEach(answer => {
//         const button = document.createElement('button')
//         button.innerText = answer.text
//         button.classList.add('btn')
//         if (answer.correct) {
//             button.dataset.correct = anser.correct
//         }
//         button.addEventListener('click', selectAnswer)
//         answerButtonElement.appendChild(button)
//     })
// }

// function resetState() {
//     nextButton.classList.add('hide')
//     while (answerButtonsElement.firstChild) {
//         answerButtonElement.removeChild
//             (answerButtonsElement.firstChild)
//     }
// }

// function selectAnswer(e) {
//     const selectedButton = e.target
//     const correct = selectedButton.dataset.correct
//     setStatusClass(document.body, correct)
//     Array.from(answerButtonsElements.children).forEach(button => {
//         setStatusClass(button, button.dataset.correct)
//     })
// }
// // if (shuffleQuestions.length > currentQuestionIndex + 1) {
// //     nextButton.classList.remove('hide')
// // } else {
// //     finishButton.innerText = 'Finish'
// //     nextButton.classList.remove('hide')
// //     finishButton.classList.remove('hide')
// // }

// function setStatusClass(element, correct) {
//     clearStatusClass(element)
//     if (correct) {
//         element.classList.add('correct')
//     } else {
//         element.classList.add('wrong')
//     }
// }