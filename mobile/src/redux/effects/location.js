import { Location, Permissions } from 'expo'

export const getStatus = () =>
  Permissions.askAsync(Permissions.LOCATION).then(({ status }) => status)

export const getLocation = () =>
  Location.getCurrentPositionAsync({}).then(({ coords }) => coords)
