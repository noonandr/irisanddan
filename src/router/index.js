import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/HomeView.vue'
import PhotosView from '../components/PhotosView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home-view',
      component: HomeView
    },
    {
      path: '/photos/',
      name: 'photos-view',
      component: PhotosView
    }
  ]
})

export default router
