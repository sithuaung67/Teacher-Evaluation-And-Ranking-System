import store from '~/teacher/store'
import { loadMessages } from '~/teacher/plugins/i18n'

export default async (to, from, next) => {
  await loadMessages(store.getters['lang/locale'])

  next()
}
