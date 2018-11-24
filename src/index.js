import './styles/fonts.scss';
import './styles/palette.scss';
import './styles/style.scss';

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

/* Pages */
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Projects from './pages/Projects.vue';
import Faith from './pages/Faith.vue';
import Shoutouts from './pages/Shoutouts.vue';
import Contact from './pages/Contact.vue';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTwitter, faInstagram, faGithub)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/projects', component: Projects },
    { path: '/faith', component: Faith },
    { path: '/shoutouts', component: Shoutouts },
    { path: '/contact', component: Contact}
]

const router = new VueRouter({
    routes
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});


