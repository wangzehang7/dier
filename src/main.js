import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vue from 'vue';
import App from './App.vue';
import myplugin from './plugins/myplugins';
import router from './router';
import "./style/index.css";
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(myplugin);
if (process.env.NODE_ENV === "development") {
    require("./mock/index.js")
}
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')