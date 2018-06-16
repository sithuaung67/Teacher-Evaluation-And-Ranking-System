const Welcome           = () => import('~/guest/pages/welcome').then(m => m.default || m)
const Login             = () => import('~/guest/pages/auth/login').then(m => m.default || m)
const Register          = () => import('~/guest/pages/auth/register').then(m => m.default || m)
const PasswordEmail     = () => import('~/guest/pages/auth/password/email').then(m => m.default || m)
const PasswordReset     = () => import('~/guest/pages/auth/password/reset').then(m => m.default || m)
const NotFound          = () => import('~/guest/pages/errors/404').then(m => m.default || m)

const Home              = () => import('~/guest/pages/home').then(m => m.default || m)
const Settings          = () => import('~/guest/pages/settings/index').then(m => m.default || m)
const SettingsProfile   = () => import('~/guest/pages/settings/profile').then(m => m.default || m)
const SettingsPassword  = () => import('~/guest/pages/settings/password').then(m => m.default || m)

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
