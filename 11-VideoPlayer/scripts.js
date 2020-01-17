const player = document.querySelector('.player__video');
const playButton = document.querySelector('.player__button');
const volumeControl = document.querySelector('input[name="volume"]');
const scrubberFullWidth = document.querySelector('.progress');
const scrubber = document.querySelector('.progress__filled');
const playbackSpeedControl = document.querySelector('input[name="playbackRate"]');
const skipButton = document.querySelectorAll('.player__button');

playButton.addEventListener('click', handlePlayButton);
volumeControl.addEventListener('change', handleVolume);
volumeControl.addEventListener('mousemove', handleVolume);
scrubberFullWidth.addEventListener('click', handleProgress);
playbackSpeedControl.addEventListener('change', handlePlaybackSpeed);
playbackSpeedControl.addEventListener('mousemove', handlePlaybackSpeed);
skipButton.forEach(button => button.addEventListener('click', handleSkip));

async function playVideo() {
    try {
        playButton.textContent = '❙❙';
    
        await player.play();
    } catch(err) {
        console.log('Could not play video');
    }
    
}

function handlePlayButton() {
    if(player.paused) {
        playVideo();
    } else {
        player.pause();
        playButton.textContent = '►';
    }
}

function handleVolume() {
    player.volume = this.value;
}

function handlePlaybackSpeed() {
    player.playbackRate = this.value;
}

function handleSkip() {
    if(!this.dataset.skip)
        return;

    player.currentTime += parseInt(this.dataset.skip);
}

function handleProgress(e) {
    let mousePos = e.clientX - scrubberFullWidth.getBoundingClientRect().x;
    let scrubberRatio = mousePos / scrubberFullWidth.offsetWidth;
    let mousePercentage = scrubberRatio * 100;
    scrubber.style.setProperty('flex-basis', `${mousePercentage}%`);
    player.currentTime = player.duration * scrubberRatio;
}

function updateScrubber() {
    let playedTime = (player.currentTime / player.duration) * 100;
    scrubber.style.setProperty('flex-basis', `${playedTime}%`);
}

setInterval(updateScrubber, 500);

