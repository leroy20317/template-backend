import { defineConfig } from '@umijs/max';
type Params = Parameters<typeof defineConfig>[0];
type Routes = Params['routes'];
const routes: Routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        redirect: '/user/login',
      },
      {
        path: '/user/login',
        layout: false,
        name: '登录',
        component: './user/login',
      },
      {
        name: '注册结果',
        path: '/user/register-result',
        component: '@/pages/user/register-result',
      },
      {
        name: '注册',
        path: '/user/register',
        component: './user/register',
      },
      {
        component: '404',
      },
    ],
  },
  {
    name: '首页',
    path: '/home',
    icon: 'home',
    component: './home',
  },
  {
    path: '/dashboard',
    name: '仪表盘',
    icon: 'dashboard',
    routes: [
      {
        path: '/dashboard',
        redirect: '/dashboard/analysis',
      },
      {
        name: '分析',
        icon: 'smile',
        path: '/dashboard/analysis',
        component: './dashboard/analysis',
      },
      {
        name: '监控',
        icon: 'smile',
        path: '/dashboard/monitor',
        component: './dashboard/monitor',
      },
    ],
  },
  {
    name: '权限演示',
    path: '/access',
    icon: 'lock',
    component: './access',
  },
  {
    name: ' CRUD 示例',
    path: '/table',
    icon: 'table',
    component: './table',
  },
  { component: '404' },
];

export default routes;
