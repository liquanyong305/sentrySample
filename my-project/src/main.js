import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import * as Sentry from '@sentry/browser';
import * as Integrations from '@sentry/integrations';

Vue.config.productionTip = false

Sentry.init({
  dsn: 'https://c8468dfd51e74e03997a1627875550e9:28cf423f44cd439e940ea83573ffee4f@sentry.io/1805612',
  integrations: [new Integrations.Vue({Vue, attachProps: true})],
  release: 'test02',
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
