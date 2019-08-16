/* Parameter */
// clock div
const clock = document.querySelector(".hours_and_minutes"); 

// default clock value
const DEFAULT_TIME = "--:--";

// interval time (ms)
const INTERVAL = 1000;



/* Function */
// set two digit
function setTimeDigit(number){
    return number < 10 ? `0${number}` : number.toString()
}

// set time
function setTime(){
    // get time
    const hours = setTimeDigit(new Date().getHours());
    const minutes = setTimeDigit(new Date().getMinutes());

    // set time
    clock.innerHTML = `${hours}:${minutes}`;
}

// intervally set time each 1sec
function intervalSetTime(){
    setTime();
    setInterval(setTime, INTERVAL);
}

// work when loaded
function init(){
    // set default clock value
    clock.innerHTML = DEFAULT_TIME;

    // set time 
    intervalSetTime(); 
}



/* Operate function */
init();