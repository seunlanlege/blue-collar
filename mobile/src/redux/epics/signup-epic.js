import Expo from 'expo'
import { ofType } from 'redux-observable'
import { concatMap } from 'rxjs/operators'
import { Observable } from 'rxjs'
import 'rxjs/add/operator/catch'

import CONFIG from '../../../config'

import { SIGNUP_ACTIONS, signUpActions } from '../modules/signup'

const api = {
  signUp: () => {
    const request = Expo.Facebook.logInWithReadPermissionsAsync(
      CONFIG.FACEBOOK_APP_ID,
      {
        permissions: ['public_profile', 'email'],
      },
    ).then(response => response.json())
    return Observable.from(request)
  },
}

export const signUpRequest = action$ =>
  action$.pipe(
    ofType(SIGNUP_ACTIONS.REQUEST),
    concatMap(() =>
      api
        .signUp()
        .map(payload => ({ type: SIGNUP_ACTIONS.FULFILLED, payload }))
        .catch(({ xhr }) =>
          Observable.of(signUpActions.rejected(xhr.response)),
        ),
    ),
  )
