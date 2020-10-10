/*jshint esversion: 6 */
let playing = false;
let score;
let scoreValue = document.getElementById("score-value");
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
    score = 0; //set score to 0
    scoreValue.innerHTML = score;
    start = 60;
    showElement("time-remaining"); //show countdown box
    hideElement("game-over");
    satrtResetBtn.innerHTML = "Reset Game"; //change button to reset
    startCountDown();
    generateQuestionAndAnswers();
  }
}

for (let i = 1; i < 5; i++) {
  document.getElementById("choice-" + i).onclick = function () {
    if (playing) {
      if (this.innerHTML == correctAnswer) {
        score++;
        scoreValue.innerHTML = score;
        hideElement("wrong");
        showElement("correct");
        setTimeout(function() {
            hideElement("correct");
        }, 1000);
        generateQuestionAndAnswers();
      } else {
          hideElement("correct");
          showElement("wrong");
          setTimeout(function() {
            hideElement("wrong");
        }, 1000);
      }
    }
  };
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
//generate a new question
function generateQuestionAndAnswers() {
  let firstNumber = 1 + Math.round(Math.random() * 9);
  let secondNumber = 1 + Math.round(Math.random() * 9);
  correctAnswer = firstNumber * secondNumber;
  question.innerHTML = `${firstNumber} x ${secondNumber}`;
  let correctAnswerPosition = 1 + Math.round(Math.random() * 3);
  document.getElementById(
    "choice-" + correctAnswerPosition
  ).innerHTML = correctAnswer;

  let answers = [correctAnswer];

  for (let i = 1; i < 5; i++) {
    if (i != correctAnswerPosition) {
      let wrongAnswer;
      do {
        wrongAnswer =
          (1 + Math.round(Math.random() * 9)) *
          (1 + Math.round(Math.random() * 9));
      } while (answers.indexOf(wrongAnswer) > -1);
      document.getElementById("choice-" + i).innerHTML = wrongAnswer;
      answers.push(wrongAnswer);
    }
  }
}

function hideElement(id) {
  document.getElementById(id).style.display = "none";
}

function showElement(id) {
  document.getElementById(id).style.display = "block";
}
