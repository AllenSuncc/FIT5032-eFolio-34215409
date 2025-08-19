import { createApp } from "vue"
import App from "./App.vue"

// PrimeVue
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'



const app = createApp(App)

app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
})

app.mount("#app")
