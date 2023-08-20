import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/HomeView.vue'
import PhotosView from '../components/PhotosView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/home/',
      name: 'home-view',
      component: HomeView
    },
    {
      path: '/',
      name: 'photos-view',
      component: PhotosView
    }
  ]
})

export default router
