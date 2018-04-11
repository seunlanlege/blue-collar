import http from './http-client'
import { authHeader, setRedeemData } from './utils'

import CONFIG from '../../../../config'

export const postReedem = (payload, auth) =>
  http
    .post(
      CONFIG.REDEEM_PATH,
      setRedeemData(Object.assign({}, payload, { userId: auth.userId })),
      authHeader(auth),
    )
    .then(({ data }) => data)
