import React from 'react'

const About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>
        This is a weather application build on React and Foundation UI.
      </p>
      <p>
        Here are some of the tools:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a>
        </li>
        <li>
          <a href="http://openweathermap.org">Open weather Map</a>
        </li>
      </ul>
    </div>
  )
}

export default  About
