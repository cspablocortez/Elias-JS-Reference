let videogameData;
let currentId;

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
    const requestURL = "https://gist.githubusercontent.com/cspablocortez/3e2f51acd357c183c013f32a65215ef6/raw/df0f219ce02cb71b8aa5729138028e9a6574d91f/videogameData.json";
    const request = new Request(requestURL);
    const response = await fetch(request);
    const videoGames = await response.json();
    console.log("Data fetched.");
    videogameData = videoGames;
    populateCover(videogameData);
}

function populateCover(obj, id) {
    const imageCover = document.querySelector(".album-art");
    const title = document.querySelector(".album-title");
    const publisher = document.querySelector(".artist-name");
    const year = document.querySelector(".song-title");

    if (id == null) {
        currentId = 0;
    }

    title.textContent = `${obj.games[currentId].name}`;
    publisher.textContent = `${obj.games[currentId].publisher}`;
    year.textContent = `${obj.games[currentId].year}`;
    imageCover.style.backgroundImage = `url(${obj.games[currentId].imageURL})`;
}


function nextItem() {
    // move catalog forward
    currentId = Math.abs((currentId + 1) % videogameData.games.length);
    populateCover(videogameData, currentId);
    console.log(currentId);
}

function prevItem() {
    // move catalog forward
    currentId = Math.abs((currentId - 1)) % videogameData.games.length;
    populateCover(videogameData, currentId);
    console.log(currentId);
}

