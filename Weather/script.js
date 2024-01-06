const API_KEY = '657a30cb69d44cdba9a01524231401';
const LOCATION = 'Tokyo';

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

    document.body.classList.remove('morning');
    document.body.classList.remove('dusk');
    document.body.classList.remove('night');
    setBackground(currentTime, sunrise, sunset);

    const city = document.getElementById('city');
    const temperature = document.getElementById("temperature");
    const forecast = document.getElementById("forecast");
    const icon = document.getElementById("icon");
    const localTime = document.getElementById('localtime');
    const highLowTemps = document.getElementById('highlow-temps')
    
    // searchResults.style.visibility = "visible";
    localTime.textContent = `Local Time: ${obj.location.localtime.slice(-5)}`;
    city.textContent = obj.location.name;
    temperature.textContent = `${Math.floor(obj.current.temp_f)} °F`;
    forecast.textContent = obj.current.condition.text;
    icon.src = obj.current.condition.icon;
    highLowTemps.textContent = `H: ${Math.floor(obj.forecast.forecastday[0].day.maxtemp_f)}º L:${Math.floor(obj.forecast.forecastday[0].day.mintemp_f)}º`;

    // Set Six Hour Forecast
    const currentHour = parseInt(currentTime.slice(0, 2));
    fetchSixHourForecast(currentHour, obj);
}

function fetchSixHourForecast(currentHour, obj) {
    const forecastIcons = document.getElementsByClassName('six-hour-forecast-icon');
    const forecastTimes = document.getElementsByClassName('six-hour-forecast-time');
    const forecastTemps = document.getElementsByClassName('six-hour-forecast-temp');
    const sixHourForecast = obj.forecast.forecastday[0].hour.slice(currentHour + 1);

    for (let i = 0; i < 6; i++) {
        forecastIcons[i].src = sixHourForecast[i].condition.icon;
        forecastTimes[i].textContent = sixHourForecast[i].time.slice(-5);
        forecastTemps[i].textContent = `${Math.floor(sixHourForecast[i].temp_f)}º`;
    }
}

function setBackground(currentTime, sunriseTime, sunsetTime) {

    var currentDate = new Date();
    var currentDateString = currentDate.toISOString().split('T')[0];

    var currentTimeObj = new Date(currentDateString + "T" + currentTime);
    var sunriseTimeObj = new Date(currentDateString + " " + sunriseTime);
    var sunsetTimeObj = new Date(currentDateString + " " + sunsetTime);

    console.log("Current Time: " + currentTimeObj);
    console.log("Sunrise: " + sunriseTime);
    console.log("Sunset: " + sunsetTime);

    if (currentTimeObj < sunriseTime) {
        document.body.classList.add('night'); 
        console.log("Foo")
    }
    
    if (currentTimeObj > sunriseTimeObj && currentTimeObj < sunsetTimeObj) {
        document.body.classList.add('dusk');
        console.log("bar")
    }

    if (currentTimeObj > sunsetTimeObj) {
        document.body.classList.add('night');
        console.log("Foobar")
    }

}

fetchWeatherData();
