import store from '~/admin/store'
import { loadMessages } from '~/admin/plugins/i18n'

export default async (to, from, next) => {
  await loadMessages(store.getters['lang/locale'])

  next()
}
