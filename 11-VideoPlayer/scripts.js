const player = document.querySelector('.player__video');
const playButton = document.querySelector('.player__button');
const volumeControl = document.querySelector('input[name="volume"');

playButton.addEventListener('click', handlePlayButton);
volumeControl.addEventListener('change', handleVolume);

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
