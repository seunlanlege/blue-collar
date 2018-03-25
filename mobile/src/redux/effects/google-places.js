import axios from 'axios'
import CONFIG from '../../../config'

export const searchRequest = (lat, long, query) =>
  axios
    .get(
      `${
        CONFIG.GOOGLE_PLACE_URL
      }/json?location=${lat},${long}&rankby=distance&keyword=${query}&key=${
        CONFIG.GOOGLE_API_KEY
      }`,
    )
    .then(({ data }) => data && data.results)
