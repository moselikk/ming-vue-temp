// 需要鉴权的业务路由
import { RouteRecordRaw } from 'vue-router';

const Management = () => import('@/layouts/default/index.vue');

const asyncRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: '',
      icon: '',
    },
    redirect: '/location/welcome',
    component: Management,
    children: [
      {
        path: '/location',
        name: 'location',
        redirect: '/location',
        meta: { title: '选项一', icon: 'location', affix: true, keepAlive: true },
        children: [
          {
            path: '/location/welcome',
            component: () => import('@/views/welcome/index.vue'),
            name: 'welcome',
            meta: { title: '欢迎', icon: 'welcome', affix: true, keepAlive: true },
          },
          {
            path: '/location/dashbord',
            component: () => import('@/views/dashbord/index.vue'),
            name: 'dashbord',
            meta: { title: '看板', icon: 'location', affix: true, keepAlive: true },
          },
        ],
      },
      {
        path: '/setting',
        name: 'setting',
        redirect: '/setting',
        meta: { title: '选项二', icon: 'setting', affix: true, keepAlive: true },
        children: [
          {
            path: '/setting/about',
            component: () => import('@/views/about/index.vue'),
            name: 'about',
            meta: { title: '关于', icon: 'homepage', affix: true, keepAlive: true },
          },
        ],
      },
    ],
  },
];

export default asyncRoutes;
