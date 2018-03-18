import { Observable } from 'rxjs'
import { shareActions, SHARE_ACTIONS } from '../modules/share'
/* eslint-disable */
import { shareApp } from '../effects/share'
/* eslint-enable */

export const shareAppEpic = action$ =>
  action$.ofType(SHARE_ACTIONS.REQUEST).switchMap(action =>
    Observable.of(shareApp(action.payload))
      .map(shareActions.fulfilled)
      .catch(error => Observable.of(shareActions.rejected(error))),
  )
