import { API_KEY, API_URL } from "./config";

export const fetchWeatherData = async (location) => {
  try {
    const response = await fetch(
      `${API_URL}/weather?q=${location}&units=metric&appid=${API_KEY}`
    );
    if (!response.ok) throw new Error("Failed to fetch weather data");
    return response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fetchForecastData = async (location) => {
  try {
    const response = await fetch(
      `${API_URL}/forecast?q=${location}&units=metric&appid=${API_KEY}`
    );
    if (!response.ok) throw new Error("Failed to fetch forecast data");
    return response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};
