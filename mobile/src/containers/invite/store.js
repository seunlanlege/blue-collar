// @flow
import { shareApp } from '../../redux/effects/share'

export class InviteStore {
  share = (firstName: string) => {
    shareApp(firstName)
  }
}
