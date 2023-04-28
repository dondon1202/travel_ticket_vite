import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import TicketCard from './components/TicketCard.vue'
import './assets/main.css'

const app = createApp(App)
app.component('TicketCard', TicketCard)
app.use(router)

app.mount('#app')
