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

    
let audio = new Audio('assets/audio/Doja Cat - Say So (Audio).mp3');

let chillFocusAudio = new Audio('assets/audio/Doja Cat - Say So (Audio).mp3');
let extremeFocusAudio = new Audio('assets/audio/Doja Cat - Say So (Audio).mp3');
let ponderAudio = new Audio('assets/audio/Doja Cat - Say So (Audio).mp3');
let daydreamAudio = new Audio('assets/audio/Doja Cat - Say So (Audio).mp3');


const playAudio = () => {
    audio.play();
    if(audio.play === true) {
        document.getElementById("fa-solid fa-play").removeEventListener('click', playAudio);
    } else {
        document.getElementById("fa-solid fa-play").addEventListener('click', playAudio);
    }
}

const pauseAudio = () => {
    audio.pause();
}


/*
if audio is playing, remove event listener & change icon to pause
if icon is set to pause icon, add event listener & change icon to play

for different genres, if a certain genre is selected, change the audio file to that genre

const playChillFocusAudio = () => {
    chillFocusAudio.play();
    if(chillFocusAudio.play === true) {
        document.getElementById("fa-solid fa-play").removeEventListener('click', playChillFocusAudio);
    } else {
        document.getElementById("fa-solid fa-play").addEventListener('click', playChillFocusAudio);
    }
    
*/