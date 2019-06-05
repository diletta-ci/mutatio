import Vue from 'vue';
import App from './App';
import router from './router';
import TextEditor from './components/TextEditor';
import Preview from './components/Preview';

Vue.component('text-editor', TextEditor);
Vue.component('preview', Preview);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
