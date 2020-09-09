// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: process.env.APIKEY,
  authDomain: 'uploadimage-d170a.firebaseapp.com',
  databaseURL: 'https://uploadimage-d170a.firebaseio.com',
  projectId: 'uploadimage-d170a',
  storageBucket: 'uploadimage-d170a.appspot.com',
  messagingSenderId: '684938209410',
  appId: '1:684938209410:web:4760caa79e71671dbeec9b'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
