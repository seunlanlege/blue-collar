import { observable, action, flow } from 'mobx'
import { persist } from 'mobx-persist'
import { login, show, signup } from '../../redux/effects/api/users'
import { login as fblogin } from '../../redux/effects/facebook'

class Auth {
  @observable statusReported = false
  @observable loading = ''

  @persist
  @observable
  isAuth = false

  @persist
  @observable
  user = {}

  @observable
  creds = {
    email: '',
    password: '',
  }

  @action
  onChange = (key: string, value: string) => {
    this.creds[key] = value
  }

  login = flow(function*() {
    this.loading = 'login'
    try {
      const user = yield login(this.creds).then(show)
      this.user = user
    } catch (error) {
      console.log('Login Error', error)
    } finally {
      this.loading = ''
    }
  })

  signup = flow(function*() {
    this.loading = 'signup'
    try {
      const user = yield signup(this.creds).then(show)
      this.user = user
      console.log('USer', user)
    } catch (error) {
      console.log('signup Error', error)
    } finally {
      this.loading = ''
    }
  })

  loginWithFacebook = flow(function*() {
    try {
      const user = yield fblogin().then(user => show({ user }))
      this.user = user
    } catch (error) {
      console.log('loginWithFacebook Error', error)
    }
  })
}

export const auth = new Auth()
