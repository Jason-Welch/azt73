const stopWatch = document.getElementsByClassName("stopWatch")[0];
const startButton = document.getElementsByClassName("startButton")[0];
const pauseButton = document.getElementsByClassName("pauseButton")[0];
const continueButton = document.getElementsByClassName("continueButton")[0];
const restartButton = document.getElementsByClassName("restartButton")[0];
const spanTag = document.getElementsByClassName("milisecond")[0];

let miliseconds = 0,
 seconds = 0,
 minutes = 0,
 hours = 0;

 // 1000ms ---> 1s
 const startTime = () => {
    miliseconds += 1;
    if (miliseconds === 100){
        miliseconds = 0;
        seconds += 1;
        if (seconds === 60) {
            seconds = 0;
            minutes += 1;

            if (minutes === 60) {
                minutes = 0;
                hours += 1;
            }
        }
    }

    const milisecondsTest = miliseconds < 10 ? "0" + miliseconds.toString() : miliseconds;
    const secondTest = seconds < 10 ? "0" + seconds.toString() : seconds;
    const minuteTest = minutes < 10 ? "0" + minutes.toString() : minutes;
    const hourTest = hours < 10 ? "0" + hours.toString() : hours;
    stopWatch.textContent = hourTest + ":" + minuteTest + ":" + secondTest;
    stopWatch.append(spanTag);
    spanTag.textContent = milisecondsTest;
 }

 let intervalId;
 startButton.addEventListener("click", () => {
   if (miliseconds > 0 || seconds > 0 || minutes > 0 || hours > 0){
      clearInterval(intervalId);
   }
    intervalId = setInterval(startTime, 10);
 })

 pauseButton.addEventListener("click", () => {
    clearInterval(intervalId);
 })

 continueButton.addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = setInterval(startTime, 10);
 })

 restartButton.addEventListener("click", () => {
    clearInterval(intervalId);
    miliseconds = 0, seconds = 0, minutes = 0, hours = 0;
    intervalId = setInterval(startTime, 10);
 })