import Expo from 'expo'
import { ofType } from 'redux-observable'
import { concatMap } from 'rxjs/operators'
import { ajax } from 'rxjs/observable/dom/ajax'
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
    )
      .then(response => response)
      .catch(error => error.response)
    return Observable.from(request)
  },
}

export const signUpRequest = action$ =>
  action$.pipe(
    ofType(SIGNUP_ACTIONS.REQUEST),
    concatMap(() =>
      api
        .signUp()
        .flatMap(payload =>
          ajax
            .getJSON(
              `https://graph.facebook.com/me?access_token=${payload.token}`,
            )
            .flatMap(response =>
              Observable.of(signUpActions.fulfilled(response)),
            ),
        )
        .catch(error => Observable.of(signUpActions.rejected(error))),
    ),
  )
