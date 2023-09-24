import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import RollbarPlugin from './rollbar'
import RollbarTest from './components/RollbarTest.vue'

const app = createApp(App)

app.use(RollbarPlugin)

app.use(createPinia())
app.use(router)

// Register the Rollbar tester component
app.component('RollbarTest', RollbarTest)

app.mount('#app')
