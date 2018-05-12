const Welcome           = () => import('~/pages/welcome').then(m => m.default || m)
const Login             = () => import('~/pages/auth/login').then(m => m.default || m)
const Register          = () => import('~/pages/auth/register').then(m => m.default || m)
const PasswordEmail     = () => import('~/pages/auth/password/email').then(m => m.default || m)
const PasswordReset     = () => import('~/pages/auth/password/reset').then(m => m.default || m)
const NotFound          = () => import('~/pages/errors/404').then(m => m.default || m)

const Home              = () => import('~/pages/home').then(m => m.default || m)
const Settings          = () => import('~/pages/settings/index').then(m => m.default || m)
const SettingsProfile   = () => import('~/pages/settings/profile').then(m => m.default || m)
const SettingsPassword  = () => import('~/pages/settings/password').then(m => m.default || m)

// TEACHERS components
const Teachers          = () => import('~/pages/Teachers/Teachers').then(m => m.default || m)

// STUDENTS components
const Students          = () => import('~/pages/Students/Students').then(m => m.default || m)

// Questions components
const questions          = () => import('~/pages/questions/questions').then(m => m.default || m)

// Results components
const results          = () => import('~/pages/results/results').then(m => m.default || m)

// Subjects components
const subjects          = () => import('~/pages/subjects/subjects').then(m => m.default || m)

// Section components
const Section          = () => import('~/pages/section/section').then(m => m.default || m)

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
  { path: '/teachers',  name: 'Teachers',  component: Teachers }, // Route Link for Teachers
  { path: '/students',  name: 'Students',  component: Students }, // Route Link for students
  { path: '/questions', name: 'Questions', component: questions }, // Route Link for Questions
  { path: '/results',   name: 'Results',   component: results }, // Route Link for results
  { path: '/subjects',   name: 'Subjects',   component: subjects }, // Route Link for Subjects
  { path: '/sections',   name: 'Section',   component: Section }, // Route Link for Section

  { path: '*', component: NotFound }
]
