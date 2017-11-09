import { ajax } from 'rxjs/observable/dom/ajax'
import { ofType } from 'redux-observable'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/delay'

const fetchUserSuccess = payload => ({ type: 'FETCH_USER_SUCCESS', payload })

const fetchUserEpic = action$ =>
  action$.ofType('FETCH_USER').switchMap(action =>
    ajax
      .getJSON(`https://api.github.com/users/${action.payload}`)
      .delay(1000)
      .map(response => fetchUserSuccess(response))
  )

export default fetchUserEpic
