import { combineEpics } from 'redux-observable'
import { Observable } from 'rxjs'

import { actions, ACTIONS } from '../modules/reviews'
import * as placeApi from '../effects/api/places'

// TODO fix this later
// export const fetch = (action$, state$) =>
//   action$.ofType(ACTIONS.FETCH).switchMap(action =>
//     Observable.fromPromise(getReviewsRequest(state$.getState().users))
//       .map(actions.fulfilled)
//       .catch(error => Observable.of(actions.rejected(error.message))),
//   )
//
export const search = action$ =>
  action$.ofType(ACTIONS.SEARCH).switchMap(action =>
    // TODO remove later
    Observable.fromPromise(placeApi)
      .map(actions.searchFulfilled)
      .catch(error => Observable.of(actions.rejected(error.message))),
  )

export const postReview = (action$, state$) =>
  action$.ofType(ACTIONS.POST).switchMap(({ payload: { place, reviewForm } }) =>
    Observable.fromPromise(
      placeApi.createReview({
        user: state$.getState().users,
        place,
        reviewForm,
      }),
    )
      .map(data => actions.created(data))
      .catch(error => Observable.of(actions.rejected(error.message))),
  )

export default combineEpics(postReview, search)
