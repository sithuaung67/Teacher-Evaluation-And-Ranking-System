const Welcome           = () => import('~/teacher/pages/welcome').then(m => m.default || m)
const Login             = () => import('~/teacher/pages/auth/login').then(m => m.default || m)
const Register          = () => import('~/teacher/pages/auth/register').then(m => m.default || m)
const PasswordEmail     = () => import('~/teacher/pages/auth/password/email').then(m => m.default || m)
const PasswordReset     = () => import('~/teacher/pages/auth/password/reset').then(m => m.default || m)
const NotFound          = () => import('~/teacher/pages/errors/404').then(m => m.default || m)

const Home              = () => import('~/teacher/pages/home').then(m => m.default || m)
const Settings          = () => import('~/teacher/pages/settings/index').then(m => m.default || m)
const SettingsProfile   = () => import('~/teacher/pages/settings/profile').then(m => m.default || m)
const SettingsPassword  = () => import('~/teacher/pages/settings/password').then(m => m.default || m)

export default [
  { path: '/',                      name: 'welcome',          component: Welcome },

  { path: '/login',                 name: 'login',            component: Login },
  { path: '/register',              name: 'register',         component: Register },
  { path: '/password/reset',        name: 'password.request', component: PasswordEmail },
  { path: '/password/reset/:token', name: 'password.reset',   component: PasswordReset },

  { path: '/home', name: 'home', component: Home },
  { path: '/settings',
    component: Settings,
    children: [
      { path: '',         redirect: { name: 'settings.profile' } },
      { path: 'profile',  name: 'settings.profile',  component: SettingsProfile },
      { path: 'password', name: 'settings.password', component: SettingsPassword }
    ]},

  { path: '*', component: NotFound }
]
