/*jshint esversion: 6 */
let playing = false;
let score;
let gameOver = document.getElementById("game-over");
let satrtResetBtn = document.getElementById("start-reset-btn");
let timeRemainingValue = document.getElementById("time-remaining-value");
let question = document.getElementById("question");
let correctAnswer;

//if we click on the start/reset button
function startResetGame() {
  if (playing) { //if we are playing
    location.reload(); //reload the page
  } else { //if we are not playing
    playing = true;
    score = 22; //set score to 0
    document.getElementById("score-value").innerHTML = score;
    start = 6;
    showElement("time-remaining"); //show countdown box
    hideElement("game-over");
    satrtResetBtn.innerHTML = "Reset Game"; //change button to reset
    startCountDown();
    generateQuestionAndAnswers();
  }
}

function startCountDown() {
  countingDown = setInterval(function () {
    start--; //reduce time by 1sec in loops
    timeRemainingValue.innerHTML = start;
    if (start == 0) {
      stopCountDown();
      showElement("game-over");
      gameOver.innerHTML = `Game Over <br/> Your score is ${score}`; //no -> game over
      hideElement("time-remaining");
      hideElement("correct");
      hideElement("wrong");
      playing = false;
      satrtResetBtn.innerHTML = "Start Game";
    }
  }, 1000);
}

function stopCountDown() {
  clearInterval(countingDown);
}

function generateQuestionAndAnswers() {
    let firstNumber = 1 + Math.round(Math.random()*9);
    let secondNumber = 1 + Math.round(Math.random()*9);
    correctAnswer = firstNumber * secondNumber;
    question.innerHTML = `${firstNumber} x ${secondNumber}`;
    let correctAnswerPosition = 1 + Math.round(Math.random()*3);
    document.getElementById("choice-"+correctAnswerPosition).innerHTML = correctAnswer;

    for (let i=1; i < 5; i++) {
        if (i != correctAnswerPosition) {
            let wrongAnswer = (1 + Math.round(Math.random()*9)) * (1 + Math.round(Math.random()*9));
            document.getElementById("choice-"+i).innerHTML = wrongAnswer;
        }
    }
}

function hideElement(id) {
  document.getElementById(id).style.display = "none";
}

function showElement(id) {
  document.getElementById(id).style.display = "block";
}

//timeleft?
//yes -> continue

//generate a new question

//if we click on the answer box
//if we are playing
//correct answer?
//yes
//incrase score
//show correct box for 1 sec
//generate new question
//no
//show try again box for 1 sec
