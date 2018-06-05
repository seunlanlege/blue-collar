import axios from 'axios'

import CONFIG from '../../../config'

export const notify = user =>
  axios({
    method: 'post',
    url: CONFIG.SLACK_URL,
    data: {
      text:
        `*NEW AMBASSADOR INTERESTED*\n\n` +
        `${user.firstName} ${user.lastName} | ${user.email}`,
    },
  }).catch(console.log)
