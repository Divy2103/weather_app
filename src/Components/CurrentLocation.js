import React, { useState,useEffect } from 'react'
import { WEATHER_API_URL, WEATHER_API_KEY } from '../Api'
import ReactAnimatedWeather from "react-animated-weather";
import Search from './Search';
import Forcast from './Forcast';

const CurrentLocation = () => {
  const [data1, setData1] = useState({})
  const [city, setCity] = useState(undefined)
  const [country, setCountry] = useState(undefined)
  const [main, setMain] = useState(undefined)
  const [icon, setIcon] = useState('CLEAR_DAY')
  const [humidity, setHumidity] = useState(undefined)
  const [tempC, setTempC] = useState(undefined)
  const [tempF, setTempF] = useState(undefined)
  
  const getWetherDetails = async (cityName) => {
    if (!cityName) return
    const apiURL = await fetch(`${WEATHER_API_URL}/weather?q=${cityName}&appid=${WEATHER_API_KEY}`)
    const data = await apiURL.json();
    setHumidity(data.main.humidity)
    setCity(data.name);
    setTempC(Math.round(data.main.temp-273.15))
    setTempF(Math.round((data.main.temp-273.15) * 1.8 + 32))
    setHumidity(data.main.humidity)
    setData1(data)
    setMain(data.weather[0].main)
    setCountry(data.sys.country)
    switch (main) {
      case "Haze":
        setIcon("CLEAR_DAY");
        break;
      case "Clouds":
        setIcon("CLOUDY");
        break;
      case "Rain":
        setIcon("RAIN");
        break;
      case "Snow":
        setIcon("SNOW");
        break;
      case "Dust":
        setIcon("WIND");
        break;
      case "Drizzle":
        setIcon("SLEET");
        break;
      case "Fog":
        setIcon("FOG");
        break;
      case "Smoke":
        setIcon("FOG");
        break;
      case "Tornado":
        setIcon("WIND");
        break;
      default:
        setIcon("CLEAR_DAY");
    }
  }

  useEffect(() => {
    getWetherDetails('halvad')
  }, [])

  return (

    <div className="col-md-12">
      <Search getWetherDetails={getWetherDetails} />
        <div className="col-md-12 text-center mt-5">

          <div className="shadow rounded wetherResultBox">
            <img className="weathorIcon"
            alt=''
              src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png" />
            <h5 className="weathorCity">
              {city} , {country}
            </h5>
            <h4>
              {main} <br />
              {/* {(data?.weather[0]?.icon)} */}
            </h4>
            <div style={{ padding: '25px 0px', backgroundColor: 'black' }}>
              <ReactAnimatedWeather
                icon={icon}
                color='white'
                size={112}
                animate={true}
              />
            </div>
            <h6 className="weathorTemp">{tempC}°C</h6>
            <h6 className="weathorTemp">{tempF}°F</h6>
            <h6 className="weathorTemp">{humidity}</h6>
          </div>
        </div>
        
      <Forcast data={data1} icon={icon} main={main}/>
    </div>
  );
}

export default CurrentLocation
