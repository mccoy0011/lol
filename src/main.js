import { createApp } from 'vue'
import App from './App.vue'
import { Tab, Tabs, Icon, Popup, Picker, Stepper, Button } from 'vant';
import 'vant/lib/index.css';
import './assets/main.css'

const app = createApp(App)
app.use(Popup)
app.use(Tab)
app.use(Tabs)
app.use(Icon)
app.use(Picker)
app.use(Stepper)
app.use(Button)
app.mount('#app')

