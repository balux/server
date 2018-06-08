import Vue from 'vue';
import App from './App.vue';

Vue.prototype.t = t;
Vue.prototype.oc_defaults = oc_defaults;
Vue.prototype.OC = OC;

const app = new Vue({
	render: h => h(App)
}).$mount('#oauth22');

export { app };

