import React, { PropTypes } from 'react'
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
        this.searchLocation = this.searchLocation.bind(this)
        this.convert = this.convert.bind(this)
    }

    componentDidMount() {
        var location = this.props.location.query.location
        this.searchLocation(location)
    }

    componentWillReceiveProps(newProps) {
        var location = newProps.location.query.location
        this.searchLocation(location)

    }

    searchLocation(location) {
        if (location && location.length > 0) {
            this.handleSearch(location)
            //window.location.hash = '#/' //This will work if we have hashHistory in react-router.
            this.context.router.push('/')
            //window.location.href = window.location.href.split("?")[0]
        }
    }
    //Return from Fahrenhet to Celcius and reverse
    convert(temp, degree) {
        var x
        if (degree == "C" && temp) {
            x = (temp - 32) * (5 / 9)
            return Math.round(x)
        } else if (degree == "F" && temp) {
            x = (temp * (9 / 5)) + 32
            return Math.round(x)
        } else {
            return null
        }
    }

    handleSearch(location) {
        this.setState(
            {
                isLoading: true,
                errorMessage: undefined,
                location: undefined,
                temp: undefined
            })

        openWeatherMap.getTemp(location).then((temp) => {
            console.log(temp)
            temp = this.convert(temp, 'C')
  
            this.setState({
                location: location,
                temp: temp+'°C',
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

//Pull in the React Router context so router is available on this.context.router.
Weather.contextTypes = {
    router: PropTypes.object.isRequired
}

export default Weather
