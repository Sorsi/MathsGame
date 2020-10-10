/*jshint esversion: 6 */
let playing = false;
let score;
let gameOver = document.getElementById("game-over");
let satrtResetBtn = document.getElementById("start-reset-btn");
//if we click on the start/reset button
function startResetGame() {
  console.log("helllo");
  playing = true;
  //if we are playing
  if (!playing) {
    location.reload(); //reload the page
  } else {
    //if we are not playing
    console.log("else -----");
    score = 0; //set score to 0
    document.getElementById("score-value").innerHTML = score;
    start = 6;
    //show countdown box
    document.getElementById("time-remaining").style.display = "block";
    let timeRemainingValue = document.getElementById("time-remaining-value");
    let countingDown = setInterval(function () {
      start--; //reduce time by 1sec in loops
      timeRemainingValue.innerHTML = start;
      if (start == 0) {
        //no -> game over
        clearInterval(countingDown);
        gameOver.style.display = "block";
        gameOver.innerHTML = `Game Over <br/> Your score is ${score}`;
        satrtResetBtn.innerHTML = "Reset Game"; //change button to reset
      }
    }, 1000);
  }
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
