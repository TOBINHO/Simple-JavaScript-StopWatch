window.onload = function() {

    var seconds = 00
    var tens = 00
    var minute = 00
    let hour = 00

    
    var tensHtml = document.getElementById("tens");
    var secondsHtml = document.getElementById("seconds");
    var minuteHtml = document.getElementById("minute");
    var hourHtml = document.getElementById("hour")

    var startButton = document.getElementById("start-button");
    var stopButton = document.getElementById("stop-button");
    var restartButton = document.getElementById("restart-button");
    var Interval ;

    startButton.onclick = function() {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }

    stopButton.onclick = function() {
        clearInterval(Interval);
    }

    restartButton.onclick = function() {
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        minute = "00";
        tensHtml.innerHTML = tens;
        secondsHtml.innerHTML = seconds;
        minuteHtml.innerHTML = minute;
    }

    function startTimer () {
        tens++;

        if(tens <= 9){
                tensHtml.innerHTML = "0" + tens;
        }

        if(tens > 9){
            tensHtml.innerHTML = tens;
        }

        if(tens > 99){
            console.log("seconds")
            seconds++;
            secondsHtml.innerHTML = "0" + seconds;
            tens = 0
            tensHtml.innerHTML = "0" + 0;
        }

        if(seconds > 9){
            secondsHtml.innerHTML = seconds;
        }

        if(seconds === 60){
            console.log("minute")
            minute++;
            minuteHtml.innerHTML = "0" + minute;
            seconds = 0
            secondsHtml.innerHTML = "0" + 0;
        }
    }

}