var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
let buttonStart = document.getElementsByClassName("button-start")[0];
let buttonReset = document.getElementsByClassName("button-reset")[0];
let isTimerRunning = false;
let min = 0;
let sec = 0;
let isEnded = false;
let interval;
let intervalStoper;
let isStoppedIntervalStoper = false;
let setTime = false;
let fourMinutes = document.getElementById("fourMinutes");
let twoMinutes = document.getElementById("twoMinutes");
let oneMinute = document.getElementById("oneMinute");
let boxClick = false;
//Code

fourMinutes.onclick = function () {
    setTimer(4);
    fourMinutes.classList.add('activeTimeButton');
    twoMinutes.classList.remove('activeTimeButton');
    oneMinute.classList.remove('activeTimeButton');
};

twoMinutes.onclick = function () {
    setTimer(2)
    fourMinutes.classList.remove('activeTimeButton');
    twoMinutes.classList.add('activeTimeButton');
    oneMinute.classList.remove('activeTimeButton');
};
oneMinute.onclick = function () {
    setTimer(1)
    fourMinutes.classList.remove('activeTimeButton');
    twoMinutes.classList.remove('activeTimeButton');
    oneMinute.classList.add('activeTimeButton');
};

buttonReset.onclick = function () { reset() }
document.getElementById("stoper").onclick = function () { stoper() };
document.getElementsByClassName("button-start")['0'].onclick = function () {
    if (!boxClick) {
        if (setTime) {
            document.getElementsByTagName("main")[0].classList.add("time-started");
            boxClick = true;
            interval = setInterval(timer, 1000);
        }
    }
    else {
        boxClick = false;
        document.getElementsByTagName("main")[0].classList.remove("time-started");
        clearInterval(interval);
    }
}
// Functions

function setTimer(mm) {
    clearInterval(intervalStoper);
    clearInterval(interval);
    document.getElementsByTagName("main")[0].classList.remove("time-started");
    document.getElementsByTagName("main")[0].classList.remove("time-notsomanyleft");
    document.getElementsByTagName("main")[0].classList.remove("time-stoper");
    document.getElementsByTagName("main")[0].classList.remove("time-ended");
    isEnded = false;
    setTime = true;
    clearInterval(interval);
    min = mm;
    sec = 0;
    UpdateHtml(mm, sec);

}


function stoper() {
    if (setTime) {
        min = 0;
        sec = 0;
        setTime = false;
        isTimerRunning = false;
        clearInterval(interval);
        document.getElementsByTagName("main")[0].classList.remove("time-ended");
        isEnded = false;
        UpdateHtml(min, sec);
    }

    if (!isTimerRunning) {
        document.getElementsByTagName("main")[0].classList.add("time-stoper");

        isTimerRunning = true;
        intervalStoper = setInterval(afterEnd, 1000);
    }
    else {
        // document.getElementsByTagName("main")[0].classList.remove("time-stoper");

        isTimerRunning = false;
        clearInterval(intervalStoper);
    };
}

function timer() {
    if (!isEnded) beforeEnd();
    else afterEnd();
}

function beforeEnd() {
    if (sec == 0) {
        if (min == 0) {
            sec++;
            UpdateHtml(min, sec);
            document.getElementsByTagName("main")[0].classList.remove("time-notsomanyleft");
            document.getElementsByTagName("main")[0].classList.add("time-ended");
            isEnded = true;
        }
        else {
            sec = 59;
            min--;
            UpdateHtml(min, sec);
        }
    }
    else {
        sec--;
        if (sec <= 30 && min == 0) document.getElementsByTagName("main")[0].classList.add("time-notsomanyleft");
        UpdateHtml(min, sec);
    };
}

function afterEnd() {
    if (sec == 59) {
        min++;
        sec = 0;
        UpdateHtml(min, sec);
    }
    else {
        sec++;
        UpdateHtml(min, sec);
    }
}

function UpdateHtml(mm, ss) {
    console.log("0" + mm + ":" + (ss < 10 ? "0" + ss : ss));
    minutes.innerHTML = "0" + mm;
    seconds.innerHTML = (ss < 10 ? "0" + ss : ss);
}

function reset() {
    clearInterval(intervalStoper);
    clearInterval(interval);
    document.getElementsByTagName("main")[0].classList.remove("time-started");
    document.getElementsByTagName("main")[0].classList.remove("time-notsomanyleft");
    document.getElementsByTagName("main")[0].classList.remove("time-stoper");
    document.getElementsByTagName("main")[0].classList.remove("time-ended");
    fourMinutes.classList.remove('activeTimeButton');
    twoMinutes.classList.remove('activeTimeButton');
    oneMinute.classList.remove('activeTimeButton');
    isEnded = false;
    setTime = false;
    min = 0;
    sec = 0;
    UpdateHtml(min, sec);
}
