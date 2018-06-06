import axios from 'axios'

import CONFIG from '../../../config'

const slackPing = msg =>
  axios({
    method: 'post',
    url: CONFIG.SLACK_URL,
    data: {
      text: msg,
    },
  }).catch(console.log)

export const notify = user => {
  const msg =
    `>>>*NEW AMBASSADOR INTERESTED*\n\n` +
    `${user.firstName} ${user.lastName} | ${user.email}`

  slackPing(msg)
}

export const notifyCancel = user => {
  const msg =
    '>>>*Membership Cancelled*\n\n' +
    `${user.firstName} ${user.lastName} | ${user.email}`

  slackPing(msg)
}

export const notifyReward = reward => {
  const msg =
    '>>>*Reward Claimed*\n\n' +
    `*Type:* ${reward.redeemType}\n` +
    `*Name:* ${reward.name}\n` +
    `*Points:* ${reward.points}\n`

  slackPing(msg)
}
