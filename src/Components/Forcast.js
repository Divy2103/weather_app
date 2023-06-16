import React from 'react'
import ReactAnimatedWeather from "react-animated-weather";

const Forcast = ({ speed, pressure, clouds, humidity, data, main, icon, visibility }) => {

  return (
    <div style={{ width: '50%' ,backgroundColor:'rgb(254 254 254 / 60%)'}}>
      <div className='weatherextra'>

        <div className='weathermain'>
          <div className='weatherimg'>
            <div style={{ padding: '25px 0px', margin: '0px 20px' }}>
              <ReactAnimatedWeather
                icon={icon}
                color='black'
                size={60}
                animate={true}
              />
            </div>
          </div>
          <div className="weatherstatus">
            <p className='showmain'>{main}</p>
          </div>
        </div>

        <div className='extraaboutweather'>
          <div className='humidity'>
            <div className='humidityvaluetag'>
              Humidity
            </div>
            <div className='humidityvalue'>
              {humidity} %
              {/* {data.main.humidity} */}
            </div>
          </div>

          <div className='humidity'>
            <div className='humidityvaluetag'>
              visibility
            </div>
            <div className='humidityvalue'>
              {visibility / 1000} Km
              {/* {data.main.humidity} */}
            </div>
          </div>

          <div className='humidity'>
            <div className='humidityvaluetag'>
              Wind Speed
            </div>
            <div className='humidityvalue'>
              {speed} Km/h
              {/* {data.main.humidity} */}
            </div>
          </div>

          <div className='humidity'>
            <div className='humidityvaluetag'>
              Pressure
            </div>
            <div className='humidityvalue'>
              {pressure} mb
              {/* {data.main.humidity} */}
            </div>
          </div>

          <div className='humidity'>
            <div className='humidityvaluetag'>
              Clouds Cover
            </div>
            <div className='humidityvalue'>
              {clouds} %
              {/* {data.main.humidity} */}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Forcast
