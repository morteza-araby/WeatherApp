import React from 'react'

const WeatherMessage = ({temp, location}) => {
  return (
    <h3 className="text-center">It's it {temp} in {location}.</h3>
  )
}

export default  WeatherMessage;
