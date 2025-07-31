import './assets/main.css';
import es from './assets/es.json';
import en from './assets/en.json';

import { createApp } from 'vue';
import App from './App.vue';
import { createI18n } from 'vue-i18n';

const i18n = createI18n({
  legacy: false,
  locale: window.navigator.language.split('-')[0],
  fallbackLocale: 'en',
  messages: {
    en: en,
    es: es,
  },
});

createApp(App).use(i18n).mount('#app');
