import axios from 'axios'
import CONFIG from '../../../config'

export const searchRequest = (lat, long, query) =>
  axios
    .get(
      `${
        CONFIG.GOOGLE_PLACE_URL
      }/nearbysearch/json?location=${lat},${long}&rankby=distance&keyword=${query}&key=${
        CONFIG.GOOGLE_API_KEY
      }`,
    )
    .then(({ data }) => data && data.results)

export const getPostalCode = placeId =>
  axios
    .get(
      `${CONFIG.GOOGLE_PLACE_URL}/details/json?place_id=${placeId}&key=${
        CONFIG.GOOGLE_API_KEY
      }`,
    )
    .then(
      ({ data: { result } }) =>
        result &&
        result.address_components &&
        result.address_components
          .map((address, idx) => {
            if (address.types[0] === 'postal_code') {
              return address.long_name
            }
            return null
          })
          .filter(x => !!x)
          .toString(),
    )
