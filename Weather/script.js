async function fetchWeatherData() {
    console.log("Sending request...");
    // const location = document.getElementById('searchInput').value;
    const location = '89141';
    const requestURL = "https://api.weatherapi.com/v1/current.json?key=657a30cb69d44cdba9a01524231401&q=" + location;
    const request = new Request(requestURL);
    const response = await fetch(request);
    const data = await response.json();
    console.log(data);

    // Error handling
    if (data.error) {
        console.error(`Unable to complete request. ${data.error.message}`);
    } else {
        console.log("Request successful.");
        populateWeather(data);
    }
}

function populateWeather(obj) {
    // const searchResults = document.getElementById('search-results');
    const city = document.getElementById('city');
    const temperature = document.getElementById("temperature");
    const forecast = document.getElementById("forecast");
    const icon = document.getElementById("icon");
    const humidity = document.getElementById('humidity');
    const localTime = document.getElementById('localtime');
    
    // searchResults.style.visibility = "visible";
    localTime.textContent = `Local Time: ${obj.location.localtime.slice(-5)}`;
    city.textContent = obj.location.name;
    temperature.textContent = `${Math.floor(obj.current.feelslike_f)} °F`;
    forecast.textContent = obj.current.condition.text;
    icon.src = obj.current.condition.icon;
    humidity.textContent = `Humidity: ${obj.current.humidity}%`;
}

fetchWeatherData();