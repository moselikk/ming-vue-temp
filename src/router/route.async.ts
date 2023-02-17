// 需要鉴权的业务路由
import { RouteRecordRaw } from 'vue-router';

const asyncRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: '',
      icon: '',
    },
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      title: 'About this template',
      icon: '',
    },
    component: () => import('@/views/about/index.vue'),
  },
];

export default asyncRoutes;
