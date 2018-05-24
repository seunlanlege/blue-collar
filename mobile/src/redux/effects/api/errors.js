// Should not be doing this in effects, but yolo for now.
import { Alert } from 'react-native'

// export const getErrorMessage = error => {
//   const { response } = error
//   if (response && response.data) {
//     if (Array.isArray(response.data.errors)) {
//       return response.data.errors[0]
//     }
//     if (
//       typeof response.data.errors === 'object' &&
//       response.data.errors.full_messages
//     ) {
//       return response.data.errors.full_messages.toString()
//     }
//     if (response.data.errors) {
//       return response.data.errors.toString()
//     }
//     return "Unfortunately, We can't process your request!"
//   }
//   if (error.message) {
//     return error.message
//   }

//   return error.toString()
// }

const parseError = ({ request, response }) => {
  if (
    response &&
    response.data &&
    response.data.errors &&
    response.data.errors.full_messages
  ) {
    return response.data.errors.full_messages.join(',\n')
  }

  if (response && response.data) return JSON.stringify(response.data)
  /* eslint-disable */
  if (request && request._response) return request._response
  /* eslint-enable */
  return 'Unknown Error'
}

export const errorAlert = err => {
  console.log(err.response)
  Alert.alert('Server Error', parseError(err), [{ text: 'OK' }])
}
