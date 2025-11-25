const cityInput = document.getElementById("cityInput");
const getWeatherBtn = document.getElementById("getWeatherBtn");
const temperature = document.getElementById("temperature");
const humidity = document.getElementById("humidity");
const condition = document.getElementById("condition");
const errorMsg = document.getElementById("errorMsg");

const apiKey = "YOUR_OPENWEATHERMAP_API_KEY";

async function fetchWeather() {
    const city = cityInput.value.trim();
    temperature.textContent = "";
    humidity.textContent = "";
    condition.textContent = "";
    errorMsg.textContent = "";

    if (city === "") {
        errorMsg.textContent = "Please enter a city name.";
        return;
    }

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        if (!response.ok) {
            throw new Error("City not found");
        }
        const data = await response.json();
        temperature.textContent = `Temperature: ${data.main.temp} °C`;
        humidity.textContent = `Humidity: ${data.main.humidity}%`;
        condition.textContent = `Condition: ${data.weather[0].description}`;
    } catch (error) {
        errorMsg.textContent = error.message;
    }
}

getWeatherBtn.addEventListener("click", fetchWeather);
