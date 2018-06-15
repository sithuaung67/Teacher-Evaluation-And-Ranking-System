const path = require('path')
const mix = require('laravel-mix')
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

mix.config.vue.esModule = true

  mix
  .js('resources/assets/js/admin/app.js', 'public/js/admin')
  .disableNotifications()

  mix
  .js('resources/assets/js/student/app.js', 'public/js/student')
  .disableNotifications()
  
  mix
  .js('resources/assets/js/guest/app.js', 'public/js/guest')
  .disableNotifications()
  
  mix
  .js('resources/assets/js/teacher/app.js', 'public/js/teacher')
  .disableNotifications()

  mix
  .sass('resources/assets/sass/app.scss', 'public/css')
  .disableNotifications()

  mix
  .js('resources/assets/js/important_empty.js', 'public/js')

  mix.version()

  mix.extract([
    'vue',
    'vform',
    'axios',
    'vuex',
    'jquery',
    'popper.js',
    'vue-i18n',
    'vue-meta',
    'js-cookie',
    'bootstrap',
    'vue-router',
    'sweetalert2',
    'vuex-router-sync',
    '@fortawesome/fontawesome',
    '@fortawesome/vue-fontawesome'
  ])

mix.webpackConfig({
  plugins: [
    // new BundleAnalyzerPlugin()
  ],
  resolve: {
    extensions: ['.js', '.json', '.vue'],
    alias: {
      '~': path.join(__dirname, './resources/assets/js')
    }
  },
  output: {
    chunkFilename: 'js/chunk/[name].[chunkhash].js',
    publicPath: mix.config.hmr ? '//localhost:8080' : '/'
  }
})
