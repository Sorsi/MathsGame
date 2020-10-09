//if we click on the start/reset button
var playing = false;
var score;
function startResetGame() {
    playing = true;
    //if we are playing
    if (playing) {
        location.reload(); //reload the page
    } else { //if we are not playing
        score = 0; //set score to 0
        document.getElementById('score-value').innerHTML = score;
        start = 60;
        document.getElementById('time-remaining').style.display = 'block';
        var timeRemainingValue = document.getElementById('time-remaining-value');
        var countingDown = setInterval(function() {
            start--; timeRemainingValue.innerHTML = start;
        }, 1000);
        countingDown();

    }
}

        //show countdown box
        //reduce time by 1sec in loops
            //timeleft?
                //yes -> continue
                //no -> game over
            //change button to reset
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