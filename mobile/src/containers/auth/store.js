// @flow
import { observable, action, flow } from 'mobx'
import { persist } from 'mobx-persist'
import { login, show, signup, update } from '../../redux/effects/api/users'
import type { IUser } from '../../redux/effects/api/users'
import { login as fblogin } from '../../redux/effects/facebook'

export class Auth {
  @observable statusReported = false
  @observable loading = ''

  @persist
  @observable
  isAuth = false

  @persist
  @observable
  user: ?IUser = undefined

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
      const pre = yield login(this.creds)
      const user = yield show(pre)
      this.user = { ...user, ...pre.user }
    } catch (error) {
      console.log('Login Error', error)
    } finally {
      this.loading = ''
    }
  })

  signup = flow(function*() {
    this.loading = 'signup'
    try {
		const pre = yield login(this.creds)
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

  updateUser = (data: any) => {
    return update({ ...data, user: this.user }).then(
      action(user => {
        this.user = { ...this.user, ...user }
      }),
    )
  }

  @action
  setIsAuth = (status: boolean) => {
    this.isAuth = status
  }
}
