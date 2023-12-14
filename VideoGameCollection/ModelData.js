async function populate() { // this is  a promise
    const requestURL = "https://gist.githubusercontent.com/cspablocortez/3e2f51acd357c183c013f32a65215ef6/raw/d92a6054ac7fa14c023b1c116fdd92b0653c76bf/videogameData.json";
    const request = new Request(requestURL);
    const response = await fetch(request);
    const videoGames = await response.json();

    console.log(videoGames);
}

populate();