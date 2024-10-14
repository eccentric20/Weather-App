const apiKey = '32f26f5ac306bc4ec84bfd21e6c5315c';
const axios = require('axios');
const city = document.getElementById('text').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;





const weatherIcons = {
    // Clear Weather
    "Clear sky": "bi bi-sun",                      // Sun icon

    // Cloudy Weather
    "Few clouds": "bi bi-cloud-sun",               // Sun with cloud icon
    "Scattered clouds": "bi bi-cloud",             // Cloud icon
    "Broken clouds": "bi bi-clouds",               // Multiple clouds icon
    "Overcast clouds": "bi bi-clouds-fill",        // Dark clouds icon

    // Rain Weather
    "Light rain": "bi bi-cloud-drizzle",           // Light drizzle icon
    "Moderate rain": "bi bi-cloud-rain",           // Rain icon
    "Heavy intensity rain": "bi bi-cloud-rain-heavy", // Heavy rain icon (custom class)
    "Very heavy rain": "bi bi-cloud-rain-heavy",   // Heavy rain icon (same as above)
    "Extreme rain": "bi bi-cloud-rain-heavy",      // Extreme rain (same as above)
    "Freezing rain": "bi bi-snow2",                // Snowflake icon (for freezing rain)
    "Light intensity shower rain": "bi bi-cloud-drizzle", // Light drizzle icon
    "Shower rain": "bi bi-cloud-rain",             // Regular rain icon
    "Heavy intensity shower rain": "bi bi-cloud-rain-heavy", // Heavy rain icon
    "Ragged shower rain": "bi bi-cloud-rain-heavy", // Heavy rain icon

    // Thunderstorm Weather
    "Thunderstorm with light rain": "bi bi-cloud-lightning-rain", // Lightning + rain icon
    "Thunderstorm with rain": "bi bi-cloud-lightning-rain",      // Same as above
    "Thunderstorm with heavy rain": "bi bi-cloud-lightning-rain", // Same as above
    "Light thunderstorm": "bi bi-cloud-lightning",               // Lightning icon
    "Thunderstorm": "bi bi-cloud-lightning",                     // Same as above
    "Heavy thunderstorm": "bi bi-cloud-lightning",               // Same as above
    "Ragged thunderstorm": "bi bi-cloud-lightning",              // Same as above
    "Thunderstorm with light drizzle": "bi bi-cloud-lightning-rain", // Lightning + rain icon
    "Thunderstorm with drizzle": "bi bi-cloud-lightning-rain",   // Same as above
    "Thunderstorm with heavy drizzle": "bi bi-cloud-lightning-rain", // Same as above

    // Drizzle Weather
    "Light intensity drizzle": "bi bi-cloud-drizzle",            // Light drizzle icon
    "Drizzle": "bi bi-cloud-drizzle",                            // Same as above
    "Heavy intensity drizzle": "bi bi-cloud-drizzle",            // Same as above
    "Light intensity drizzle rain": "bi bi-cloud-drizzle",       // Same as above
    "Drizzle rain": "bi bi-cloud-drizzle",                       // Same as above
    "Heavy intensity drizzle rain": "bi bi-cloud-drizzle",       // Same as above
    "Shower rain and drizzle": "bi bi-cloud-rain",               // Rain icon
    "Heavy shower rain and drizzle": "bi bi-cloud-rain-heavy",   // Heavy rain icon
    "Shower drizzle": "bi bi-cloud-drizzle",                     // Drizzle icon

    // Snow Weather
    "Light snow": "bi bi-snow",                                  // Snowflake icon
    "Snow": "bi bi-snow",                                        // Snowflake icon
    "Heavy snow": "bi bi-snow2",                                 // Snowflake (heavier)
    "Sleet": "bi bi-cloud-snow",                                 // Snow + rain icon
    "Light shower sleet": "bi bi-cloud-sleet",                   // Light sleet icon (custom)
    "Shower sleet": "bi bi-cloud-sleet",                         // Sleet icon
    "Light rain and snow": "bi bi-cloud-sleet",                  // Rain + snow icon
    "Rain and snow": "bi bi-cloud-sleet",                        // Same as above
    "Light shower snow": "bi bi-cloud-snow",                     // Light snow icon
    "Shower snow": "bi bi-cloud-snow",                           // Snow icon
    "Heavy shower snow": "bi bi-cloud-snow-heavy",               // Heavy snow icon (custom)

    // Atmosphere (Mist, Fog, Smoke, etc.)
    "Mist": "bi bi-cloud-haze",                                  // Haze icon
    "Smoke": "bi bi-cloud-fog",                                  // Fog icon (similar to smoke)
    "Haze": "bi bi-cloud-haze",                                  // Haze icon
    "Sand/dust whirls": "bi bi-wind",                            // Wind icon
    "Fog": "bi bi-cloud-fog",                                    // Fog icon
    "Sand": "bi bi-wind",                                        // Wind icon
    "Dust": "bi bi-wind",                                        // Wind icon
    "Volcanic ash": "bi bi-cloud-fog2",                          // Custom class for volcanic ash
    "Squalls": "bi bi-cloud-wind",                               // Custom wind + cloud icon
    "Tornado": "bi bi-tornado",                                  // Tornado icon

    // Extreme Weather
    "Tropical storm": "bi bi-cloud-lightning-rain",              // Lightning + rain icon
    "Hurricane": "bi bi-wind",                                   // Wind icon
    "Cold": "bi bi-thermometer-snow",                            // Cold icon
    "Hot": "bi bi-thermometer-sun",                              // Hot icon (custom class)
    "Windy": "bi bi-wind",                                       // Wind icon
    "Hail": "bi bi-cloud-hail",                                  // Hail icon (custom)
};

function getWeatherIcon(descrip){
    return weatherIcons[descrip];
}

window.onload = function(){
    document.querySelector("button").onclick = getWeather;
}

function getWeather(){
    
    
    axios.get(url)
        .then(response => {
            const weather = response.data;
            alert("hello");
            // const weatherDescription = weather.weather[0].description;
            // const iconClass = getWeatherIcon(weatherDescription);
            // const iconTag = `<i class="${iconClass}"></i><h1>${weatherDescription}</h1>`;
            // const temp = `<i class="fas fa-thermometer-half"></i><h1>${(weather.main.temp - 273.15).toFixed(2)}°C</h1>`;
            // const cityName = `<h1>${weather.name}</h1><i class="bi bi-geo-alt-fill"></i>`;
            
            // document.getElementById('temperature').innerHTML = temp;
            // document.getElementById('description').innerHTML = iconTag;
            // document.getElementById('city').innerHTML = cityName;

        })
        .catch(error => {
            
        });
}




