import axios from 'axios'
import CONFIG from '../../../config'

export const searchRequest = (lat, long, query) =>
  axios
    .get(
      `${
        CONFIG.GOOGLE_PLACE_URL
      }/place/nearbysearch/json?location=${lat},${long}&rankby=distance&keyword=${query}&key=${
        CONFIG.GOOGLE_API_KEY
      }`,
    )
    .then(({ data }) => data && data.results)

export const getStateCode = placeId =>
  axios
    .get(
      `${CONFIG.GOOGLE_PLACE_URL}/geocode/json?place_id=${placeId}&key=${
        CONFIG.GOOGLE_API_KEY
      }`,
    )
    .then(
      ({ data: { results } }) =>
        results &&
        results[0] &&
        results[0].address_components &&
        results[0].address_components
          .map((address, idx) => {
            if (address.types[0] === 'administrative_area_level_1') {
              return {
                state: address.short_name,
                formattedAddress: results[0].formatted_address,
              }
            }
            return null
          })
          .filter(x => !!x)[0],
    )
