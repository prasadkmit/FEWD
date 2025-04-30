import React, { useState, useEffect } from "react";

const Weather = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        setWeather(await(await fetch("https://api.openweathermap.org/data/2.5/weather?lat=17.366&lon=78.476&appid=ac2a7947b6ec2f3cad3cdfeafb1291ee")).json());
    };
    fetchData();
  }, []);

  return (
    <div>
        <h1 className="text-2xl">Weather data in Hyderabad</h1>
        <div className="card bg-white text-black h-auto ">
            <div>{"Weather mode : " + weather?.weather[0]?.main}</div>
            <div>{"Tempreature : " + weather?.main.temp + `°F`}</div>
            <div>{"Wind speed : " + weather?.wind.speed}</div>
        </div>
    </div>
  );
};

export default Weather;
