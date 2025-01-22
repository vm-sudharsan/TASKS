import React from "react";

const ForecastWeather = ({ forecast }) => {
  const forecastItems = forecast.list.slice(0, 5); // Show only the next 5 intervals

  return (
    <div className="forecast-weather card">
      <h3>Upcoming Forecast</h3>
      <div className="forecast-grid">
        {forecastItems.map((item, index) => (
          <div key={index} className="forecast-item">
            <p>{new Date(item.dt * 1000).toLocaleTimeString()}</p>
            <img
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              alt={item.weather[0].description}
            />
            <p>{item.weather[0].description}</p>
            <p>Temp: {item.main.temp}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastWeather;
