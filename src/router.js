import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Cart from './views/Cart.vue'
import Product1 from './views/Product-modal.vue'
import Product2 from './views/Product-simple.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/',
      name: 'Product1',
      component: Product1
    },
    {
      path: '/Product2',
      name: 'Product2',
      component: Product2
    }
  ]
})
