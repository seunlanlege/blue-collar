// @flow
import { observable, action, flow, computed } from 'mobx'
import isEmail from 'validator/lib/isEmail'
import trim from 'validator/lib/trim'
import { persist } from 'mobx-persist'
import {
  login,
  show,
  signup,
  update,
  logout,
} from '../../redux/effects/api/users'
import type { IUser } from '../../redux/effects/api/users'
import { login as fblogin } from '../../redux/effects/facebook'

export class Auth {
  @observable statusReported = false
  @observable loading = ''

  @persist
  @observable
  isAuth = false

  @persist('object')
  @observable
  user: ?IUser

  @observable
  creds = {
    email: 'seun@hbyte.com',
    password: '12345678',
  }

  @action
  onChange = (key: string, value: string) => {
    this.creds[key] = value
  }

  logout = flow(function*() {
    this.isAuth = false
    try {
      yield logout({ user: this.user })

      this.user = undefined
    } catch (e) {}
  })

  @computed
  get isValid() {
    return isEmail(trim(this.creds.email)) && this.creds.password.length >= 8
  }

  login = flow(function*() {
    this.loading = 'login'
    try {
      const pre = yield login(this.creds)
      const user = yield show(pre)
      this.user = { ...user, ...pre.user }
      if (this.user.placeId) {
        this.isAuth = true
      } else {
        return true
      }
    } catch (error) {
      console.log('Login Error', error)
    } finally {
      this.loading = ''
    }
  })

  signup = flow(function*() {
    this.loading = 'signup'
    try {
      const pre = yield signup(this.creds)
      const user = yield show(pre)
      this.user = { ...user, ...pre.user }
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

  updateUser = (data: any) =>
    update({ ...data, user: this.user }).then(
      action(user => {
        this.user = { ...this.user, ...user }
      }),
    )

  @action
  setIsAuth = (status: boolean) => {
    this.isAuth = status
  }
}
