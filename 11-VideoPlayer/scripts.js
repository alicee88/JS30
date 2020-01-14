const player = document.querySelector('.player__video');
const playButton = document.querySelector('.player__button');

playButton.addEventListener('click', handlePlayButton);

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
