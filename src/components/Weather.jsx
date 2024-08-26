import React, { useEffect, useRef, useState } from "react";
import "./Weather.css";
import SearchBar from "./SearchBar";
import Weatherdata from "./Weatherdata";
import Temperature from "./Temperature";
import ErrorMessage from "./ErrorMessage";

const Weather = () => {
  const apiKey = "7c0fffa03ef59f830a43c7cf8e57f1c5"; // Your OpenWeather API key

  const [flag, setFlag] = useState(true);
  // Mapping weather icons to images
  const allIcons = {
    "01d": "images/clear.png",
    "01n": "images/clear.png",
    "02d": "images/cloud.png",
    "02n": "images/cloud.png",
    "03d": "images/cloud.png",
    "03n": "images/cloud.png",
    "04d": "images/drizzle.png",
    "04n": "images/drizzle.png",
    "09d": "images/rain.png",
    "09n": "images/rain.png",
    "10d": "images/rain.png",
    "10n": "images/rain.png",
    "13d": "images/snow.png",
    "13n": "images/snow.png",
  };

  // Initial state for weather data
  const [weatherData, setWeatherData] = useState({});

  // Function to fetch weather data for a specific city
  const searchInput = async (city) => {
    if (city === "") {
      alert("Please enter the city name !");
      return;
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
      const response = await fetch(url);
      const data = await response.json();

      if (data.cod === 200) {
        // Check if the response is successful
        const icon = allIcons[data.weather[0].icon] || "images/clear.png";

        // Update weather data state
        setWeatherData({
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
          temperature: Math.floor(data.main.temp),
          location: data.name,
          icon: icon,
        });
      } else {
        console.error("City not found or API error:", data.message);
        setFlag(false);
        setWeatherData({
          humidity: 0,
          windSpeed: 0,
        });
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  // Effect to fetch weather data for "London" on initial render
  useEffect(() => {
    searchInput("Peshawar");
  }, []);

  return (
    <div className="weather">
      <SearchBar searchInput={searchInput} />

      {flag ? (
        <Temperature
          icon={weatherData.icon}
          temperature={weatherData.temperature}
          location={weatherData.location}
        />
      ) : (
        <ErrorMessage />
      )}

      <Weatherdata
        humidity={weatherData.humidity}
        windSpeed={weatherData.windSpeed}
      />
    </div>
  );
};

export default Weather;
