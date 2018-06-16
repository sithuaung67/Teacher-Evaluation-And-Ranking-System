import store from '~/student/store'
import { loadMessages } from '~/student/plugins/i18n'

export default async (to, from, next) => {
  await loadMessages(store.getters['lang/locale'])

  next()
}
