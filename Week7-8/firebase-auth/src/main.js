import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from 'firebase/app'

// Firebase initialization
const firebaseConfig = {
  apiKey: "AIzaSyB14yE2nxS8RKv4T3leoPUgu7UMgkVZ6bo",
  authDomain: "week7-haojun-94b40.firebaseapp.com",
  projectId: "week7-haojun-94b40",
  storageBucket: "week7-haojun-94b40.appspot.com",
  messagingSenderId: "809641826305",
  appId: "1:809641826305:web:15cccf6cc0d23bf311c800"
};
initializeApp(firebaseConfig)

const app = createApp(App)
app.use(router)
app.mount('#app')
