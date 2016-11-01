import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Main from "./components/Main"
import About from './components/About'
import Examples from './components/Examples'
import Weather from './components/Weather'

export default(
    <Route path="/" component={Main}>
         <Route path="about" component={About}/>
        <Route path="examples" component={Examples}/>
         <IndexRoute component={Weather}/>
    </Route>
)


