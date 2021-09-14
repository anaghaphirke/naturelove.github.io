import Home from './home.js'


const Contact = { template: '<div>Contact page <p>this is Contact</p></div>' }

const routes = [
  { path: '/home', component: Home },
  { path: '/contact', component: Contact }
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  router
}).$mount('#app')