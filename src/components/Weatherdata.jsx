import React from "react";

const Weatherdata = ({ humidity, windSpeed }) => {
  return (
    <div className="weather-data">
      <div className="col">
        <img src="images/humidity.png" alt="Humidity" />
        <div>
          <p>{humidity} %</p>
          <span>Humidity</span>
        </div>
      </div>
      <div className="col">
        <img src="images/wind.png" alt="Wind Speed" />
        <div>
          <p>{windSpeed} m/s</p>
          <span>Wind Speed</span>
        </div>
      </div>
    </div>
  );
};

export default Weatherdata;
