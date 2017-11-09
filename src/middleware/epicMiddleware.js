import { createEpicMiddleware, combineEpics } from 'redux-observable'
import pingEpic from './pingEpic'
import fetchEpic from './fetchGithubUserEpic'
import counterEpic from './updownEpic'

const epicMiddleware = createEpicMiddleware(
  combineEpics(pingEpic, fetchEpic, counterEpic)
)

export default epicMiddleware
