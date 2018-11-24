import './styles/fonts.scss';
import './styles/palette.scss';
import './styles/style.scss';

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Home from './components/Home/Home.vue';
import Projects from './components/Projects/Projects.vue';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTwitter, faInstagram, faGithub)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Home },
    { path: '/projects', component: Projects}
]

const router = new VueRouter({
    routes
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});


