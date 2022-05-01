import React, {useState} from "react";
import "./Display.css";
import axios from "axios";

function Display() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=a314915a9c37cc375641afc26cd37e7e`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
      });
      setLocation("");
    }
  };
  return (
    <>
      <div className="app">
        <div className="search">
          <input
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            onKeyPress={searchLocation}
            placeholder="Enter Location"
            type="text"
          />
          <div className="description">
            <p>Type any place name to know their weather details</p>
          </div>
        </div>
        <div className="container">
          <div className="portion">
            <div className="top">
              <div className="temp">
                {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
              </div>
              <div className="location">
                <p>{data.name}</p>
              </div>

              <div className="description">
                {data.weather ? <p>{data.weather[0].main}</p> : null}
              </div>
              <div className="icon">
                {data.sys ? <p>{data.sys.country}</p> : null}
              </div>
            </div>
          </div>

          <div className="part">
            <img
              src="https://c4.wallpaperflare.com/wallpaper/394/564/978/winter-evening-sunset-sky-clouds-snow-forest-house-wallpaper-preview.jpg"
              alt="background"
            />
            <div className="title">
              <p>Weather details</p>
            </div>
            {data.name !== undefined && (
              <div className="bottom">
                <div className="feels">
                  {data.main ? (
                    <p className="bold">{data.main.feels_like.toFixed()}°F</p>
                  ) : null}
                  <p>Feels Like</p>
                </div>
                <div className="humidity">
                  {data.main ? <p>{data.main.humidity}%</p> : null}
                  <p>Humidity</p>
                </div>
                <div className="wind">
                  {data.wind ? <p>{data.wind.speed.toFixed()}MPH</p> : null}
                  <p>Wind Speed</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Display;
