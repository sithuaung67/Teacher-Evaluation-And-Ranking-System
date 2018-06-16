const Welcome           = () => import('~/admin/pages/welcome').then(m => m.default || m)
const Login             = () => import('~/admin/pages/auth/login').then(m => m.default || m)
const Register          = () => import('~/admin/pages/auth/register').then(m => m.default || m)
const PasswordEmail     = () => import('~/admin/pages/auth/password/email').then(m => m.default || m)
const PasswordReset     = () => import('~/admin/pages/auth/password/reset').then(m => m.default || m)
const NotFound          = () => import('~/admin/pages/errors/404').then(m => m.default || m)

const Home              = () => import('~/admin/pages/home').then(m => m.default || m)
const Settings          = () => import('~/admin/pages/settings/index').then(m => m.default || m)
const SettingsProfile   = () => import('~/admin/pages/settings/profile').then(m => m.default || m)
const SettingsPassword  = () => import('~/admin/pages/settings/password').then(m => m.default || m)

// TEACHERS components
const Teachers          = () => import('~/admin/pages/Teachers/Teachers').then(m => m.default || m)

// STUDENTS components
const Students          = () => import('~/admin/pages/Students/Students').then(m => m.default || m)

// Questions components
const questions          = () => import('~/admin/pages/questions/questions').then(m => m.default || m)

// Results components
const results          = () => import('~/admin/pages/results/results').then(m => m.default || m)

// Subjects components
const subjects          = () => import('~/admin/pages/subjects/subjects').then(m => m.default || m)

// Section components
const Section          = () => import('~/admin/pages/section/section').then(m => m.default || m)

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
