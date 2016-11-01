import React from 'react'

class WeatherForm extends React.Component {
    constructor(props, context) {
        super(props, context)

        this.onFormSubmit = this.onFormSubmit.bind(this)
    }
    onFormSubmit(e) {
        e.preventDefault()

        var location = this.refs.location.value

        if (location.length > 0) {
            this.refs.location.value = ''
            this.props.onSearch(location)
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" ref="location" />
                    <button className="button expanded hollow">Get Weather</button>
                </form>
            </div>
        )
    }
}

export default WeatherForm
