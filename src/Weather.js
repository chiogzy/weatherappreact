import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  function showTemperature(response) {
    setWeather({
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: response.data.condition.icon_url,
    });
    setLoaded(true);
  }

  function searchCity() {
    let apiKey = "96d0co355f49ab560b74b29t9fc1eea7";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature);
  }

  let weatherData = {
    city: "Lagos",
    temperature: 31,
    date: "Wednesday 09:34 am",
    description: "few clouds",
    imgUrl:
      "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png",
    humidity: 44,
    wind: 4.63,
  };

  let form = (
    <div className="weather-app">
      <header>
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            className="search-form-input"
            type="search"
            placeholder="Enter a City..."
            onChange={updateCity}
          />
          <input
            className="search-form-button"
            type="submit"
            name="Search"
            value={"search"}
          />
        </form>
      </header>
    </div>
  );

  if (loaded) {
    return (
      <div class="weatherApp">
        <div className="weather-app-data">
          <strong>{city}</strong>{" "}
          <div className="weather-app-details">
            <p>
              Thursday, 10:47, condition: {weather.description}, humidity:{" "}
              <strong> {weather.humidity}%</strong>
              wind: <strong>{Math.round(weather.wind)} km/h</strong>
            </p>
          </div>
          <div className="weather-app-temperature-container">
            <span className="weather-app-icon">
              <img alt="icon" src={weather.icon} />
            </span>
            <span className="weather-app-temperature">
              <strong>{Math.round(weather.temperature)}</strong>
            </span>
            <span className="weather-app-unit">°C</span>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div class="weatherApp">
        {form}
        <main>
          <div class="weather-app-data">
            <div>
              <h1 class="weather-app-city" id="city">
                {weatherData.city}
              </h1>
              <p class="weather-app-details">
                <span id="time">{weatherData.date}</span>,{" "}
                <span id="description">{weatherData.description}</span>
                <br />
                Humidity: <strong id="humidity">{weatherData.humidity}%</strong>
                , Wind:
                <strong id="wind-speed">{weatherData.wind}km/h</strong>
              </p>
            </div>
            <div class="weather-app-temperature-container">
              <div id="icon">
                <img
                  src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png"
                  alt="weatherimage"
                />
              </div>
              <div class="weather-app-temperature" id="temperature">
                {weatherData.temperature}
              </div>
              <div class="weather-app-unit">℃</div>
            </div>
          </div>
          <div class="weather-forecast" id="forecast"></div>
        </main>
      </div>
    );
  }
}
