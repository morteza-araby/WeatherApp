import React from 'react'
import { Link } from 'react-router'

const Examples = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a few example location to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Stockholm'>Stockholm, Sweden</Link>
        </li>
        <li>
          <Link to='/?location=Rio'>Rio, Brazil</Link>
        </li>
      </ol>
    </div>
  )
}

export default Examples
