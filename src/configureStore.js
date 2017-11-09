import { createStore, applyMiddleware, compose } from 'redux'
import epicMiddleware from './middleware/epicMiddleware'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const logger = createLogger({
  collapsed: true
})

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(epicMiddleware, logger))
)

export default store
