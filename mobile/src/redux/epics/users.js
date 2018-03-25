import { Observable } from 'rxjs'

import { DATA_ENTRY, dataEntryActions } from '../modules/user-data-entry'
import { userDataRequest } from '../effects/api'

export const proceedUserDataEpic = (action$, state$) =>
  action$.ofType(DATA_ENTRY.REQUEST).switchMap(action =>
    Observable.fromPromise(
      userDataRequest(state$.getState().userDataEntry, state$.getState().user),
    )
      .map(dataEntryActions.fulfilled)
      .catch(error => Observable.of(dataEntryActions.rejected(error.message))),
  )
