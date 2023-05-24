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
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to) => {
  const luminariesStore = useLuminariesStore()
  if(luminariesStore.luminaries.length === 0) {
    luminariesStore.fetchLuminaries()
  }

  const userStore = useUsersStore()
  const user:User = {
    id: "1",
    name: 'John Doe',
    email: 'johndoe@mail.com',
    favoriteLuminaries: [],
  }
  userStore.setUser(user);
  return;
})

export default router
