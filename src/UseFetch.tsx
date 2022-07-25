import { useState, useEffect } from 'react';
import './index.css';
import WeatherSection from './WeatherSection';

function UseFetch () {
    type Weather = {
        day: string;
        date: string;
        temperature: number;
        humidity: number;
        type: string;
      } 
    
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
            <div>
                
                {myWeather.map( weather => (
                    <div className = "box">
                        <h1>Day: {weather.day}</h1>
                        <h1>Date: {weather.date}</h1>
                        <h1>Temp: {weather.temperature}</h1>
                        <h1>Humidity: {weather.humidity}</h1>
                        <h1>Type: {weather.type}</h1>
                        
                    </div>
                    ))}
           </div>
            
            
          );    
}
    


export default UseFetch;

/*

                {myWeather.map(  (weather) => (
                    <div className = "box">
                        <h1>Day: {weather.day}</h1>
                        <h1>Date: {weather.date}</h1>
                        <h1>Temp: {weather.temperature}</h1>
                        <h1>Humidity: {weather.humidity}</h1>
                        <h1>Type: {weather.type}</h1>
                        
                    </div>
                    ))}
*/