//import Home from './home.js'
import Home from './home.js'
import Contact from './contact.js'
import About from './about.js'
import Signin from './signin.js'
import Login from './login.js'
import Cart from './cart.js'

const routes = [
  { path: '/home', component: Home },
  { path: '/contact', component: Contact },
  { path: '/about', component: About },
  { path: '/signin', component: Signin },
  { path: '/login', component: Login },
  { path: '/cart', component: Cart }

]

const router = new VueRouter({
  routes
})

const app = new Vue({
  router
}).$mount('#app')