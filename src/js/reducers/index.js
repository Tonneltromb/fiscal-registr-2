import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import auth from './auth'
import evotor from './evotor'
import prechecks from './prechecks'

export default combineReducers({ auth, evotor, prechecks, routing: routerReducer })
