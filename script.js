/*jshint esversion: 6 */
let playing = false;
let score;
let gameOver = document.getElementById("game-over");
let satrtResetBtn = document.getElementById("start-reset-btn");
let questions = [
    {
        id: 1,
        question: '2 x 2',
        answerRight: 4,
        answerWrongA: 5,
        answerWrongB: 6,
        answerWrongC: 94,
    },
    {
        id: 2,
        question: '4 x 5',
        answerRight: 9,
        answerWrongA: 34,
        answerWrongB: 22,
        answerWrongC: 43,
    },
    {
        id: 3,
        question: '12 - 9',
        answerRight: 3,
        answerWrongA: 4,
        answerWrongB: 6,
        answerWrongC: 97,
    },

];
//if we click on the start/reset button
function startResetGame() {
    //if we are playing
    if (playing) {
        location.reload(); //reload the page
    } else {
    playing = true;
    //if we are not playing
    score = 0; //set score to 0
    document.getElementById("score-value").innerHTML = score;
    start = 6;
    //show countdown box
    showElement("time-remaining");
    let timeRemainingValue = document.getElementById("time-remaining-value");
    satrtResetBtn.innerHTML = "Reset Game"; //change button to reset
    let countingDown = setInterval(function () {
      start--; //reduce time by 1sec in loops
      timeRemainingValue.innerHTML = start;
      if (start == 0) {
        //no -> game over
        clearInterval(countingDown);
        showElement("game-over");
        gameOver.innerHTML = `Game Over <br/> Your score is ${score}`;
        hideElement("time-remaining");
      }
    }, 1000);
  }
}

function hideElement (id) {
    document.getElementById(id).style.display = 'none';
}

function showElement (id) {
    document.getElementById(id).style.display = 'block';
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
