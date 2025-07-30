import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Catalogo from '../pages/Catalogo.vue'
import Contacto from '../pages/Contacto.vue'
import Admin from '../pages/Admin.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/catalogo', component: Catalogo },
  { path: '/contacto', component: Contacto },
  { path: '/admin', component: Admin }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
