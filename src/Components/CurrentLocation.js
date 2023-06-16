import React, { useState, useEffect } from 'react'
import { WEATHER_API_URL, WEATHER_API_KEY } from '../Api'
import ReactAnimatedWeather from "react-animated-weather";
import Clock from "react-live-clock";
import { countries } from 'country-data';
import Search from './Search';
import Forcast from './Forcast';

const CurrentLocation = () => {

    const dateBuilder = (d) => {
        let months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];
        let days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day}, ${date} ${month} ${year}`;
    };

    const [data1, setData1] = useState({})
    const [city, setCity] = useState(undefined)
    const [country, setCountry] = useState(undefined)
    const [main, setMain] = useState(undefined)
    const [icon, setIcon] = useState('CLEAR_DAY')
    const [humidity, setHumidity] = useState(undefined)
    const [tempC, setTempC] = useState(undefined)
    const [tempF, setTempF] = useState(undefined)
    const [feelLike, setFeelLike] = useState(undefined)
    const [visibility, setVisibility] = useState(undefined)
    const [speed, setSpeed] = useState(undefined)
    const [pressure, setPressure] = useState(undefined)
    const [clouds, setClouds] = useState(undefined)
    const [description, setDescription] = useState(undefined)

    const getWetherDetails = async (cityName) => {
        if (!cityName) return
        const apiURL = await fetch(`${WEATHER_API_URL}/weather?q=${cityName}&appid=${WEATHER_API_KEY}`)
        const data = await apiURL.json();
        setHumidity(data.main.humidity)
        setCity(data.name);
        setTempC(Math.round(data.main.temp - 273.15))
        setTempF(Math.round((data.main.temp - 273.15) * 1.8 + 32))
        setFeelLike(Math.round(data.main.feels_like - 273.15))
        setHumidity(data.main.humidity)
        setVisibility(data.visibility)
        setData1(data)
        setMain(data.weather[0].main)
        setCountry(countries[data.sys.country].name)
        setSpeed(data.wind.speed)
        setPressure(data.main.pressure)
        setClouds(data.clouds.all)
        const desc = data.weather[0].description.toUpperCase();
        setDescription(desc)
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

        <div>
            <Search getWetherDetails={getWetherDetails} />
            <div className='contactLocation'>

                <div className='contactLocationSide1' >
                    <div className='timeTemp'>

                        <div className='currentTime'>
                            <div style={{ fontWeight: '400', margin: '10px', fontSize: '40px' ,color:'white'}}>Current Weather</div>
                            <div className="current-city">
                                <p >{city} , {country}</p>
                            </div>
                        </div>

                        <div className='description'>
                            <div style={{ fontWeight: '200', margin: '10px', fontSize: '40px' ,color:'white'}}>{description}</div>
                        </div>

                        <div className='tempmain'>
                            <div className='time-date'>
                                <div className="current-time">
                                    <Clock format="HH:mm:ss" interval={1000} ticking={true} />
                                </div>
                                <div className="current-date">{dateBuilder(new Date())}</div>
                            </div>
                            <div className="tempreture">
                                <p className='showTempCel'>{tempC}°c</p>
                                <p className='feelsLikeTemp'>Feels Like {feelLike}°c</p>
                            </div>
                        </div>



                    </div>
                </div>
                <Forcast description={description} speed={speed} pressure={pressure} clouds={clouds} visibility={visibility} humidity={humidity} data={data1} icon={icon} main={main} />
            </div>
        </div>
    );
}

export default CurrentLocation
