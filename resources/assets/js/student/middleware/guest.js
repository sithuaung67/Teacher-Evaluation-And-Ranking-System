import store from '~/student/store'

export default (to, from, next) => {
  if (store.getters['auth/check']) {
    next({ name: 'home' })
  } else {
    next()
  }
}
