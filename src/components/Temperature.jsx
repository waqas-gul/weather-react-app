import React from "react";

const Temperature = ({ icon, temperature, location }) => {
  return (
    <>
      <img className="weather-icon" src={icon} alt="Weather icon" />
      <p className="temperature">{temperature}°C</p>
      <p className="location">{location}</p>
    </>
  );
};

export default Temperature;
