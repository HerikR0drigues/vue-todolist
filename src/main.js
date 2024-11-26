import './assets/main.css'
import FontAwesomeIcon from './plugins/fontawesome';

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);

// Registrar o componente FontAwesomeIcon globalmente
app.component('font-awesome-icon', FontAwesomeIcon);

// Montar o aplicativo
app.mount('#app');