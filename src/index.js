import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxPromise from "redux-promise"
import  {Router, browserHistory, hashHistory } from "react-router"
//import App from './components/app'
import reducers from './reducers'
import routes from './routes'



// Load foundation
require('foundation-sites/dist/foundation.min.css')
require('./app.scss')

$(document).foundation()


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(  
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.getElementById('container'));
