import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import { store } from './assets/store/store.js';
import { routes } from './routes';
import '../serviceWorker';
import vuescrollto from 'vue-scrollto';


Vue.use(VueRouter);
Vue.use(vuescrollto);

global.router = new VueRouter({
    routes,
    mode: 'history'
})

axios.defaults.baseURL = 'https://workboost.me/wbbend/public/api';

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

const shouldSW = 'serviceWorker' in navigator;
if (shouldSW) {
  navigator.serviceWorker.register('/serviceWorker.js').then (() => {
    console.log('SW registered');
  })
} 

var deferredPrompt;
window.addEventListener('beforeinstallprompt', function(event){
  console.log('Before install Prompt');
  event.preventDefault();
  deferredPrompt = event;
  return false;
});