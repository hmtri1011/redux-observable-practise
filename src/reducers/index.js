import { combineReducers } from 'redux'
import pingReducer from './pingReducer'
import fetchReducer from './fetchUserReducer'
import countReducers from './countReducers'

export default combineReducers({
  ping: pingReducer,
  user: fetchReducer,
  counter: countReducers
})
