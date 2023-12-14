let videogameData;

document.addEventListener('DOMContentLoaded', function() {
    fetchVideoGameData()

    // Pause/Play functionality
    var playButton = document.querySelector('.control-play');
    var album = document.querySelector('.album');

    playButton.addEventListener('click', function() {
        var musicPlayerContainer = document.querySelector('.music-player-container');
        musicPlayerContainer.classList.toggle('is-playing');
    });

});

async function fetchVideoGameData() { // this is  a promise
    const requestURL = "https://gist.githubusercontent.com/cspablocortez/3e2f51acd357c183c013f32a65215ef6/raw/d92a6054ac7fa14c023b1c116fdd92b0653c76bf/videogameData.json";
    const request = new Request(requestURL);
    const response = await fetch(request);
    const videoGames = await response.json();
    console.log("Data fetched.");
    videogameData = videoGames;
    populateCover(videogameData);
}

function populateCover(obj) {
    const imageCover = document.querySelector(".album-art");
    const title = document.querySelector(".album-title");
    const publisher = document.querySelector(".artist-name");
    const year = document.querySelector(".song-title");

    title.textContent = `${obj.games[0].name}`;
    publisher.textContent = `${obj.games[0].publisher}`;
    year.textContent = `${obj.games[0].year}`;
    imageCover.style.backgroundImage = `url(${obj.games[0].imageURL})`;
}


function nextItem() {
    // move catalog forward
}

