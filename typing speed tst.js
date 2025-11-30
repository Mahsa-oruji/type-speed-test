const theTimer = document.querySelector(".timer");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector(".P3").innerHTML;
const resetBotton = document.querySelector(".BTN");

var timer = [0, 0, 0, 0];
var timerRunning = false;
var interval;

function leadingZero(time) {
    if (time <= 9) {
        time = "0" + time;
    }
    return time;
}

function runTimer() {
    let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
    theTimer.innerHTML = currentTime;

    timer[3]++; //sadom saniye kham

    timer[0] = Math.floor((timer[3] / 100) / 60); //sadom saniye be daghighe

    timer[1] = Math.floor((timer[3] / 100) - (timer[0] * 60)); //sadom saniye be saniye

    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000)); //sadom saniye ba ehtesab daghighe va saniye


}

function reset() {
    clearInterval(interval);
    interval = null;
    timer = [0, 0, 0, 0];
    timerRunning = false;

    testArea.value = "";
    theTimer.innerHTML = "00:00:00";
    testArea.style.borderColor = "grey";

}

function Start() {

    let textEnteredLength = testArea.value.length;

    if (textEnteredLength == 0 && !timerRunning) {

        timerRunning = true;
        interval = setInterval(runTimer, 10);
    }

}

function spellCheck() {
    let textEntered = testArea.value;
    let originTextMatch = originText.substring(0, textEntered.length);

    if (textEntered == originText) {
        testArea.style.borderColor = "green";
        clearInterval(interval);
    } else {

        if (textEntered == originTextMatch) {
            testArea.style.borderColor = "yellow";
        } else {
            testArea.style.borderColor = "red";
        }
    }

}


testArea.addEventListener("keypress", Start);
testArea.addEventListener("keyup", spellCheck);
resetBotton.addEventListener("click", reset);

