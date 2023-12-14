async function populate() { // this is  a promise
    const requestURL = "https://gist.github.com/cspablocortez/3e2f51acd357c183c013f32a65215ef6";
    const request = new Request(requestURL);
    const response = await fetch(request);
    const videoGames = await response.json();
}