import { ofType } from 'redux-observable'
import 'rxjs/add/operator/delay'
import 'rxjs/add/operator/mapTo'

const pingEpic = action$ =>
  action$
    .ofType('PING')
    .delay(2000)
    .mapTo({ type: 'PONG' })

export default pingEpic
