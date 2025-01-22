import React from "react";

const CurrentWeather = ({ weather }) => {
  const { main, weather: weatherDetails, wind } = weather;

  return (
    <div className="current-weather card">
      <h2>
        {weather.name}, {weather.sys.country}
      </h2>
      <div className="weather-icon">
        <img
          src={`https://openweathermap.org/img/wn/${weatherDetails[0].icon}@4x.png`}
          alt={weatherDetails[0].description}
        />
      </div>
      <h3>{weatherDetails[0].description}</h3>
      <div className="details">
        <p>Temperature: {main.temp}°C</p>
        <p>Feels Like: {main.feels_like}°C</p>
        <p>Humidity: {main.humidity}%</p>
        <p>Wind Speed: {wind.speed} km/h</p>
        <p>Pressure: {main.pressure} hPa</p>
      </div>
    </div>
  );
};

export default CurrentWeather;
