import type { NavigationGuardNext, RouteLocationNormalized, RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

// 路由配置 和以前一样
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/home',
    name: 'home',
    meta: {
      type: 'home',
    },
    component: () => import('@/views/home'),
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      type: 'login',
    },
    component: () => import('@/views/login'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('@/views/404'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(
  (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    const user = localStorage.getItem('user')
    if (to.meta.type === 'login' && user)
      next({ name: 'home' })

    if (to.meta.type === 'home' && !user)
      next({ name: 'login' })

    next()
  },
)

export default router
