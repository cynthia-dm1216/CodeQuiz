
//getting scores from local storage
var highScores = JSON.parse(localStorage.getItem("highscores"));

//storing highsore in descending order
highScores.forEach(function(printHighScore) {
    var scoreListEl = document.getElementById('score-list');
    var currentScore = document.createElement('li');
    currentScore.textContent = printHighScore;
    scoreListEl.appendChild(currentScore);
})
