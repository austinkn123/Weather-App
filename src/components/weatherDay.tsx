import React, { Component } from "react";
import Weather from "../types/weather";
import sunnyIcon from "../img/sunnyIcon.webp";
import rainyIcon from "../img/rainyIcon.png";
import cloudyIcon from "../img/cloudyIcon.png";
import foggyIcon from "../img/foggyIcon.webp";

interface WeatherProps {
  weather: Weather;
}
//dynamic weather class/icon based on weather.type

export const WeatherDay: React.FC<WeatherProps> = ({ weather }) => {
  let weatherClass = "sunny";
  let icon = sunnyIcon;

  switch (weather.type) {
    case "Sunny":
      weatherClass = "sunny";
      icon = sunnyIcon;
      break;
    case "Rainy":
      weatherClass = "rainy";
      icon = rainyIcon;
      break;
    case "Cloudy":
      weatherClass = "cloudy";
      icon = cloudyIcon;
      break;
    case "Foggy":
      weatherClass = "foggy";
      icon = foggyIcon;
      break;
  }

  return (
    <div className={`box ${weatherClass}`}>
      <img className="image" src={icon} />
      <h1 className="date">
        {weather.day}
        <br />
        {weather.date}{" "}
      </h1>
      <h2 className="details">
        <br />
        {weather.type}
        <br />
        {weather.temperature}°<br />
        {weather.humidity}%
      </h2>
    </div>
  );
};

// switch (weather.type) {
//     case "Sunny":
//         return(
//             <div className="box sunny">
//                 <img className="image" src= {sunnyIcon} />
//                 <h1 className = "date">{weather.day}<br/>{weather.date} </h1>
//                 <h2 className = "details"><br/>{weather.type}<br/>{weather.temperature}°<br/>{weather.humidity}%</h2>
//             </div>
//         );
//     case "Rainy":
//         return(
//             <div className="box rainy" >
//                 <img className="image" src= {rainyIcon} />
//                 <h1 className = "date">{weather.day}<br/>{weather.date} </h1>
//                 <h2 className = "details"><br/>{weather.type}<br/>{weather.temperature}°<br/>{weather.humidity}%</h2>
//             </div>
//         );
//     case "Cloudy":
//         return(
//             <div className="box cloudy" >
//                 <img className="image" src= {cloudyIcon} />
//                 <h1 className = "date">{weather.day}<br/>{weather.date} </h1>
//                 <h2 className = "details"><br/>{weather.type}<br/>{weather.temperature}°<br/>{weather.humidity}%</h2>
//             </div>
//         );
//     case "Foggy":
//         return(
//             <div className="box foggy" >
//                 <img className="image" src= {foggyIcon} />
//                 <h1 className = "date">{weather.day}<br/>{weather.date} </h1>
//                 <h2 className = "details"><br/>{weather.type}<br/>{weather.temperature}°<br/>{weather.humidity}%</h2>
//             </div>
//         );
