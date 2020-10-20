import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import App from './App.vue'

// createApp(App).mount('#app');

const app = createApp(App);
app.use(Antd);
app.mount("#app");
