import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Table from '../views/Table.vue'
import Update from '../components/Update.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/table',
    name: 'Table',
    component: Table
  },
  {
    path: '/update/:id',
    name: 'Update',
    component: Update
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
