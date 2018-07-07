import Vue from 'vue';
import App from './App';
import router from './router';
import TextEditor from './components/TextEditor';
import Preview from './components/Preview';
import TrelloBoard from './components/TrelloBoard';
import FormModel from './components/FormModel';
import Control from './components/Control';

Vue.component('text-editor', TextEditor);
Vue.component('preview', Preview);
Vue.component('trelloBoard', TrelloBoard);
Vue.component('form-model', FormModel);
Vue.component('control', Control);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
