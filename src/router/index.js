import { createRouter, createWebHashHistory } from 'vue-router'
// import Layout from '../layout'
/**
 * 自定义所有私有权限路由
 * 默认只加载公有路由表
 */
import UserManage from './modules/UserManage'
import RoleList from './modules/RoleList'
import PermissionList from './modules/PermissionList'
import ArticleRanking from './modules/ArticleRanking'
import ArticleCreate from './modules/ArticleCreate'

// 一级路由 最外层的路由 /login /user /article /
// 要想拿到所有的字路由, 就必须先拿所有一级的路由的children (所有的子数据在一级的children里面)

// 公有路由表
export const publicRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/',
    component: () => import('../layout'),
    redirect: '/profile',
    children: [
      {
        path: '/profile',
        name: 'profile',
        component: () => import('../views/profile'),
        meta: {
          title: '个人中心',
          icon: 'personnel'
        }
      },
      {
        path: '/404',
        name: '404',
        component: () => import('../views/error-page/404')
      },
      {
        path: '/401',
        name: '401',
        component: () => import('../views/error-page/401')
      }
    ]
  }
]

// 私有路由表
export const privateRoutes = [
  UserManage,
  RoleList,
  PermissionList,
  ArticleRanking,
  ArticleCreate
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})

export default router
