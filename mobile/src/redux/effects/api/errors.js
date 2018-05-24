// Should not be doing this in effects, but yolo for now.
import { Alert } from 'react-native'

const parseError = ({ request, response, message }) => {
  if (response && response.data) {
    if (Array.isArray(response.data.errors)) {
      return response.data.errors[0]
    }
    if (
      typeof response.data.errors === 'object' &&
      response.data.errors.full_messages
    ) {
      return response.data.errors.full_messages.join(',\n')
    }
    if (response.data.errors) {
      return JSON.stringify(response.data.errors)
    }
    return "Unfortunately, We can't process your request!"
  }

  /* eslint-disable */
  if (request && request._response) return request._response
  /* eslint-enable */
  if (message) return message
  return 'Unknown Error'
}

export const errorAlert = err => {
  console.log('ERROR')
  console.trace()
  Alert.alert('Server Error', parseError(err), [{ text: 'OK' }])
  return err
}
