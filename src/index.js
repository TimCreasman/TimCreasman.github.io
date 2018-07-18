import './styles/fonts.scss';
import './styles/palette.scss';
import './styles/style.scss';

import Vue from 'vue';
import App from './Index.vue';
new Vue({
  el: '#app',
  render: h => h(App)
});