
const timerContainer = document.querySelector('.timer');
const buttons = timerContainer.querySelectorAll('[data-time]');
const timeH1 = document.querySelector('.display__time-left');
const returnTime = document.querySelector('.display__end-time');

let countdown;

function timer(secondsLeft) {
    const now = Date.now();
    const then = now + secondsLeft * 1000;

    clearInterval(countdown);
    displayTimer(secondsLeft);
    displayEndTime(then);

    countdown = setInterval(() => {
        secondsLeft--;
        
        if(secondsLeft < 0) {
            // stop the timer
            clearInterval(countdown);
            return;
        } else {
            displayTimer(secondsLeft);
        }
    }, 1000);
}

function displayTimer(seconds) {
    const mins = Math.floor(seconds / 60);
    const secsLeft = seconds % 60;

    timeH1.textContent = `${mins}:${secsLeft < 10 ? '0' : ''}${secsLeft}`;
}

function displayEndTime(timestamp) {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const mins = date.getMinutes();

    returnTime.textContent = `Return at: ${hours}:${mins < 10 ? '0' : ''}${mins}`;
}


function setTimer() {
    
    timer(parseInt(this.dataset.time));
    
}

buttons.forEach(button => button.addEventListener('click', setTimer));
document.customForm.addEventListener('submit', function(e) {
    // Stops the page reloading on submit
    e.preventDefault();
    timer(this.minutes.value * 60);
    this.reset();
});
