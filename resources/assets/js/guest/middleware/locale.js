import store from '~/guest/store'
import { loadMessages } from '~/guest/plugins/i18n'

export default async (to, from, next) => {
  await loadMessages(store.getters['lang/locale'])

  next()
}
