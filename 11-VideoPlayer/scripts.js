const player = document.querySelector('.player__video');
const playButton = document.querySelector('.player__button');
const volumeControl = document.querySelector('input[name="volume"');
const scrubberFullWidth = document.querySelector('.progress');
const scrubber = document.querySelector('.progress__filled');

playButton.addEventListener('click', handlePlayButton);

volumeControl.addEventListener('change', handleVolume);
volumeControl.addEventListener('mousemove', handleVolume);
scrubberFullWidth.addEventListener('click', handleProgress);

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

