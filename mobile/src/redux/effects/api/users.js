import http from './http-client'
import { authHeader, setUserData } from './utils'

import CONFIG from '../../../../config'

export const userDataRequest = (payload, auth) =>
  http
    .put(
      `${CONFIG.USERS_PATH}/${auth.userId}`,
      authHeader(auth),
      setUserData(payload),
    )
    .then(({ data }) => data)
