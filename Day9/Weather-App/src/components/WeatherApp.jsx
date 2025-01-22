import React, { useState } from "react";
import CurrentWeather from "./CurrentWeather";
import ForecastWeather from "./ForecastWeather";
import ThemeToggle from "./ThemeToggle";
import { fetchWeatherData, fetchForecastData } from "../utils/fetchWeather";

const WeatherApp = () => {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [theme, setTheme] = useState("light");

  const handleSearch = async () => {
    const weatherData = await fetchWeatherData(location);
    const forecastData = await fetchForecastData(location);
    setWeather(weatherData);
    setForecast(forecastData);
  };

  return (
    <div className={`weather-app ${theme}`}>
      <ThemeToggle theme={theme} setTheme={setTheme} />
      <div className="header">
        <h1>Weather App</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for a city..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
      {weather && <CurrentWeather weather={weather} />}
      {forecast && <ForecastWeather forecast={forecast} />}
    </div>
  );
};

export default WeatherApp;
