let workTitle = document.getElementById('work');
let breakTitle = document.getElementById('break');

let workTime = 25;
let breakTime = 5;

let seconds = "00";

//display
window.onload = () => {
    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('seconds').innerHTML = seconds;

    workTitle.classList.add('active');
}

//start timer
function start() {
    //change button
    document.getElementById('start').style.display = "none";
    document.getElementById('reset').style.display = "block";

    //change the time
    seconds = 59;

    let workMins = workTime - 1;
    let breakMins = breakTime - 1;

    breakCount = 0;

    //countdown
    let timerFunction = () => {
        //change the display
        document.getElementById('minutes').innerHTML = workMins;
        document.getElementById('seconds').innerHTML = seconds;

        //start
        seconds = seconds - 1;

        if(seconds === 0) {
            workMins = workMins - 1;
            seconds = 59;
            if(workMins === -1) {
                if(breakCount % 2 === 0) {
                    // start break
                    workMins = breakMins;
                    breakCount++;
                    
                    //change panel
                    workTitle.classList.remove('active');
                    breakTitle.classList.add('active');
                } else {
                    //continue work
                    workMins = workTime;
                    breakCount++;

                    //change panel
                    breakTitle.classList.remove('active');
                    workTitle.classList.add('active');
                }
            }
           // seconds = 59;
        }
    }

    //start countdown
    setInterval(timerFunction, 1000); //1000 = 1s
}


const playAudio = () => {
    let audio = new Audio('assets/audio/Doja Cat - Say So (Audio).mp3');
    audio.play();

    if(audio.play === true) {
        
    }
}

const pauseAudio = () => {
    let audio = new Audio('assets/audio/Doja Cat - Say So (Audio).mp3');
    audio.pause();
}