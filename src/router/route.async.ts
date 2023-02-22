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
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/management',
    name: 'management',
    meta: {
      title: 'management',
      icon: '',
    },
    redirect: '/management/sub1/dashbord',
    component: Management,
    children: [
      {
        path: '/management/sub1',
        name: 'sub1',
        redirect: '/management/sub1/dashbord',
        meta: { title: '选项一', icon: 'location', affix: true, keepAlive: true },
        children: [
          {
            path: '/management/sub1/dashbord',
            component: () => import('@/views/dashbord/index.vue'),
            name: 'dashbord',
            meta: { title: '看板', icon: 'location', affix: true, keepAlive: true },
          },
          {
            path: '/management/sub1/about',
            component: () => import('@/views/about/index.vue'),
            name: 'about',
            meta: { title: '关于', icon: 'location', affix: true, keepAlive: true },
          },
        ],
      },
      {
        path: '/management/sub2',
        name: 'sub2',
        redirect: '/management/sub1/dashbord',
        meta: { title: '选项二', icon: 'Setting', affix: true, keepAlive: true },
        children: [
          {
            path: '/management/sub2/dashbord',
            component: () => import('@/views/dashbord/index.vue'),
            name: 'dashbord2',
            meta: { title: '看板', icon: 'homepage', affix: true, keepAlive: true },
          },
          {
            path: '/management/sub2/about',
            component: () => import('@/views/about/index.vue'),
            name: 'about2',
            meta: { title: '关于', icon: 'homepage', affix: true, keepAlive: true },
          },
        ],
      },
    ],
  },
];

export default asyncRoutes;
