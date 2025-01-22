import React, { useState } from 'react';
import WeatherInput from './components/WeatherInput';
import WeatherCard from './components/WeatherCard';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  return (
    <div className="app">
      <h1>Professional Weather App</h1>
      <WeatherInput setWeatherData={setWeatherData} />
      {weatherData && <WeatherCard data={weatherData} />}
    </div>
  );
};

export default App;
