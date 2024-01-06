const API_KEY = '657a30cb69d44cdba9a01524231401';
const LOCATION = '89141';

async function fetchWeatherData() {
    console.log("Sending request...");
    // const location = document.getElementById('searchInput').value;
    // const requestURL = "https://api.weatherapi.com/v1/current.json?key=657a30cb69d44cdba9a01524231401&q=" + location;
    const requestURL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${LOCATION}`
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

    const currentTime = obj.location.localtime.slice(-5);
    const sunrise = obj.forecast.forecastday[0].astro.sunrise;
    const sunset = obj.forecast.forecastday[0].astro.sunset;

    const city = document.getElementById('city');
    const temperature = document.getElementById("temperature");
    const forecast = document.getElementById("forecast");
    const icon = document.getElementById("icon");
    const localTime = document.getElementById('localtime');
    const highLowTemps = document.getElementById('highlow-temps')
    
    // searchResults.style.visibility = "visible";
    localTime.textContent = `Local Time: ${obj.location.localtime.slice(-5)}`;
    city.textContent = obj.location.name;
    temperature.textContent = `${Math.floor(obj.current.feelslike_f)} °F`;
    forecast.textContent = obj.current.condition.text;
    icon.src = obj.current.condition.icon;
    highLowTemps.textContent = `H: ${Math.floor(obj.forecast.forecastday[0].day.maxtemp_f)}º L:${Math.floor(obj.forecast.forecastday[0].day.mintemp_f)}º`;

    // Get current hours
    const currentHour = parseInt(currentTime.slice(0, 2));
    console.log("Current Hour: " + currentHour);

    const sixHourForecast = obj.forecast.forecastday[0].hour;
    console.log(sixHourForecast.slice(17));


    // setBackground(obj);
}

fetchWeatherData();
