// Composables
import { createRouter, createWebHistory } from 'vue-router'
import { useLuminariesStore } from '@/store/luminaries'
import { useUsersStore } from '@/store/users'
// Types
import User from '@/models/user'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
        beforeEnter: async (to, from, next) => {
          const store = useLuminariesStore();
          await store.fetchLuminaries();
          next()
        }
      },
    ],
  },
  {
    path: '/solar-system',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Solar System',
        component: () => import('@/views/SolarSystem.vue'),
        beforeEnter: async (to, from, next) => {
          const store = useLuminariesStore();
          await store.fetchLuminaries();
          next()
        }
      }
    ]
  },
  {
    path: '/profile',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Profile',
        component: () => import(/* webpackChunkName: "profile" */ '@/views/Profile.vue'),
      },
    ],
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to) => {

  const userStore = useUsersStore()
  // if user store in store is empty object
  if(!userStore.user.id) {
    const user:User = {
      id: "1",
      name: 'John Doe',
      email: 'johndoe@mail.com',
      favoriteLuminaries: [],
    }
    userStore.setUser(user);
  }
  return; 
})

export default router
