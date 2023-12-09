async function populate() { // this is  a promise
    const requestURL = "https://gist.githubusercontent.com/cspablocortez/3e2f51acd357c183c013f32a65215ef6/raw/ba637665bbfa5200245eae52be20506681f7642f/videogameData.json";
    const request = new Request(requestURL);
    const response = await fetch(request);
    const videoGames = await response.json();
}