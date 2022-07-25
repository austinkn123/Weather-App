import { useState, useEffect } from 'react';
import './index.css';
import Weather from './types/weather';
import { WeatherDay } from './components/weatherDay';

function WeatherSection () {
    
      const weather: Weather = {
        day: "Monday",
        date: "1-1-1920",
        temperature: 32,
        humidity: 40,
        type: "Sunny"
      }
    
        const [myWeather, setMyWeather] = useState<Weather[]>([]);
    
        useEffect(() => {
            fetch('http://localhost:8080/weather/info')
            //head
            .then(response => response.json())
            //body (function)
            .then(data => {
              console.log(data);
              setMyWeather(data);
            });

        }, [])

    return (
        <div className = "weather">
            {myWeather.map(weather => (
              //Call weather day and pass in prop of one object in list bc of mapping
                <WeatherDay weather={weather} />
            ))}

        </div>
    );
}

export default WeatherSection;