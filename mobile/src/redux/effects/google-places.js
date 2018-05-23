import axios from 'axios'
import CONFIG from '../../../config'

export const searchRequest = (lat, long, query) =>
  axios
    .get(
      `${
        CONFIG.GOOGLE_PLACE_URL
      }/place/autocomplete/json?input=${query}&types=geocode&key=${
        CONFIG.GOOGLE_API_KEY
      }`,
    )
    .then(({ data }) => data && data.predictions)

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
                coordinate: results[0].geometry.location,
              }
            }
            return null
          })
          .filter(x => !!x)[0],
    )
