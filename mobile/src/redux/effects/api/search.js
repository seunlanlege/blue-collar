import axios from 'axios'

import CONFIG from '../../../../config'

export const searchRequest = (lat, long, query) =>
  axios
    .get(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${long}&radius=1000&keyword=${query}&key=${
        CONFIG.GOOLE_PLACE_API
      }`,
    )
    .then(({ data }) => data && data.results)
