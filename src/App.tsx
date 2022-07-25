import {useState, useEffect} from 'react';
import './index.css';
import UseFetch from './UseFetch';
import WeatherSection from './WeatherSection';


function App() {

  return (
    
    <div className = "root">
      <h1 className = "header">WEATHER FORECAST <br/>Kansas City, Kansas</h1>
      <WeatherSection />
      
      {/* <UseFetch /> */}
      
    </div>
    
  );
}



export default App;

