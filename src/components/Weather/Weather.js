import React from "react";
import { useState, useEffect } from "react";
//import "./Weather.scss";

export const WeatherEditConfig = {
  emptyLabel: "Weather",

  isEmpty: function (props) {
    return !props || !props.location;
  },
};

const icons = new Map();
icons.set("clear-day", "sunny");
icons.set("fog", "fog");
icons.set("cloudy", "cloudy");
icons.set("partly-cloudy-day", "partly_cloudy_day");

export default function Weather({ location }) {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    async function fetchWeather() {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${location.lat}&longitude=${location.lng}&current_weather=true`
      );
      const json = await response.json();
      setWeather(json.current_weather);
    }
    fetchWeather();
  }, [location]);

  return (
    <div>
      <div className="weather">
        <div className="weather">
          <div className="sun"></div>
          <div>{location.name}</div>
          <div className="temp">{weather.temperature}°C</div>
        </div>
      </div>
    </div>
  );
}
