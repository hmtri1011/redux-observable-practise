import { ofType, combineEpics } from 'redux-observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/filter'

const upEpic = (action$, store) =>
  action$
    .ofType('UP')
    .debounceTime(1000)
    .map(() => ({ type: 'INCREMENT' }))

const downEpic = (action$, store) =>
  action$
    .ofType('DOWN')
    .debounceTime(1000)
    .map(() => ({ type: 'DECREMENT' }))

const upIfOddEpic = (action$, store) =>
  action$
    .ofType('UP_ODD')
    .filter(() => store.getState().counter % 2 === 1) //check in stream action that have type === 'UP_ODD'
    .debounceTime(1000)
    .map(() => ({ type: 'INCREMENT' }))

const downIfEvenEpic = (action$, store) =>
  action$
    .ofType('DOWN_EVEN')
    .filter(() => store.getState().counter % 2 === 0)
    .debounceTime(1000)
    .map(() => ({ type: 'DECREMENT' }))

export default combineEpics(upEpic, downEpic, upIfOddEpic, downIfEvenEpic)
