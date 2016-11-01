import React from 'react'
import WeatherForm from './WeatherForm'
import WeatherMessage from './WeatherMessage'
import openWeatherMap from '../api/openWeatherMap'

class Weather extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            isLoading: false
        }
        this.handleSearch = this.handleSearch.bind(this)
    }

    handleSearch(location) {
        var that = this

        this.setState({ isLoading: true })

        openWeatherMap.getTemp(location).then(function (temp) {
            that.setState({
                location: location,
                temp: temp,
                isLoading: false
            })
        }, (errorMessage) => {
            that.setState({ isLoading: false })
            alert(errorMessage)
        })
    }
    render() {
        var {isLoading, temp, location} = this.state;

        function renderMessage() {
            if (isLoading) {
                return <h3 className="text-center">Fetching weather...</h3>
            } else if (temp && location) {
                return <WeatherMessage temp={temp} location={location} />
            }
        }

        return (
            <div>
                <h1 className="text-center">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch} />
                {renderMessage()}
            </div>
        )
    }
}

export default Weather
