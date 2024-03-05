import React, { useState } from 'react'
import './weatherapp.css';
import cloud_icon from './Assets/cloud.png';
import clear_icon from './Assets/clear.png';
import search_icon from './Assets/search.png';
import drizzle_icon from './Assets/drizzle.png';
import rain_icon from './Assets/rain.png';
import snow_icon from './Assets/snow.png';
import wind_icon from './Assets/wind.png';
import humidity_icon from './Assets/humidity.png';
const Weatherapp = () => {
      let api = {
        key: "b83072061cbe9f2b0e1c8c96d1007f9e",
        base:"https://api.openweathermap.org/data/2.5/weather"
    }
    let [serach, setSearch] = useState("");

    let [weather, setWeather] = useState({});
    //https://openweathermap.org/find?q=Balasore

    function locsearch()
    {
        fetch(`${api.base}?q=${serach}&appid=${api.key}&units=metric`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setWeather(data)
        })
    }
  return (
    <div className='container'>
      
            <div className='topbar'>
               <input type="text" onChange={(e)=>setSearch(e.target.value)} placeholder='Search'/>
          <br />
              <div className="searchicon" onClick={locsearch}>
                  <img src={search_icon} alt="" />
             </div>
          </div>
          {
              (weather.main !== undefined) ? (
                  <div>
                    <div className="weathertemp">Temp-{weather.main.temp}<sup>0</sup>C</div>
                    <div className="weatherloaction">City Name-:{weather.name}</div>
                    <div className='countrycode'>{weather.sys.country}</div>
                     <div className="weatherimg"><img src={cloud_icon} alt="" /></div>
            <div className="datacontainer">
              <div className="elememt">
                  <img src={humidity_icon} alt="" className='icon' />
                  <div className="data">
                                  <div className="humiditypercent">{weather.main.humidity}%</div>
                      <div className="text">Humidity</div>
                  </div>
              </div>
              <div className="elememt">
                  <img src={wind_icon} alt="" className='icon' />
                  <div className="data">
                                  <div className="humiditypercent">{weather.wind.speed}km/h</div>
                      <div className="text">Wind Speed</div>
                  </div>
              </div>
          </div>
                      {/* <p>{weather.weather[0].description}</p> */}
                  </div>
              ) : (<div className='notfound'>
                     <h1> Data Not found</h1>
                      <p>Please enter Correct Loaction</p>
              </div>)
          }
          
    </div>
  )
}

export default Weatherapp
