document.addEventListener('DOMContentLoaded', function() {

    // Pause/Play functionality
    var playButton = document.querySelector('.control-play');
    var album = document.querySelector('.album');

    playButton.addEventListener('click', function() {
        var musicPlayerContainer = document.querySelector('.music-player-container');
        musicPlayerContainer.classList.toggle('is-playing');
    });

});


const imageCoverURLs =
    [
        "https://i.pinimg.com/736x/73/32/52/7332527b2baa4785959b1b8e2ba41dce.jpg",
        "https://logodix.com/logo/45400.jpg",
        "https://steamuserimages-a.akamaihd.net/ugc/793135280575664837/0BBE59C999EBF567C86CB78D0452F243C9E389FD/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
        "https://picsum.photos/200",
        "https://picsum.photos/200"
    ]

const imageCover = document.querySelector('.album-art');
let idx = 0;

function nextItem() {
    console.log(idx);
    idx = (idx + 1) % imageCoverURLs.length;
    imageCover.style.backgroundImage = `url(${imageCoverURLs[idx]})`;
}