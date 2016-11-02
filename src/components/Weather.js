import React from 'react'
import WeatherForm from './WeatherForm'
import WeatherMessage from './WeatherMessage'
import openWeatherMap from '../api/openWeatherMap'
import ErrorModal from './ErrorModal'

class Weather extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            isLoading: false,
            errorMessage: undefined
        }
        this.handleSearch = this.handleSearch.bind(this)     
           
    }

    handleSearch(location) {
        this.setState({ isLoading: true , errorMessage: undefined})

        openWeatherMap.getTemp(location).then((temp) => {
            this.setState({
                location: location,
                temp: temp,
                isLoading: false
            })
        }, (e) => {
            this.setState({ isLoading: false, errorMessage: e.message })

        })
    }

    render() {
        var {isLoading, temp, location, errorMessage} = this.state;

        function renderMessage() {
            if (isLoading) {
                return <h3 className="text-center">Fetching weather...</h3>
            } else if (temp && location) {
                return <WeatherMessage temp={temp} location={location} />
            }
        }
        function renderError() {
            if (typeof errorMessage === 'string') {
                return (
                    <ErrorModal message={errorMessage} />
                )
            }
        }
        return (
            <div>
                <h1 className="text-center page-title">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch} />
                {renderMessage()}
                {renderError()}
            </div>
        )
    }
}

export default Weather
