import Vue from "vue";
import App from "./App";
import router from "./router";
import iView from 'iview';
import 'iview/dist/styles/iview.css';

new Vue({
  el: "#root",
  router,
  template: "<App/>",
  components: { App }
});
