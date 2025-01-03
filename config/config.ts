import { defineConfig } from '@umijs/max';
import routes from './routes';

const isDev = process.env.NODE_ENV === 'development';
// .example.com
const domain = process.env.SERVER === 'formal' ? '' : '';
const cdnHost = `cdn${domain}`;
const packageName = process.env.npm_package_name;
const publicPath =
  process.env.NODE_ENV === 'production' ? `//${cdnHost}/${packageName}/` : '/';

export default defineConfig({
  esbuildMinifyIIFE: true,
  hash: true,
  antd: {
    configProvider: {
      theme: {
        token: {},
      },
    },
  },
  access: {},
  model: {},
  initialState: {},
  request: {},
  svgr: {},
  theme: {
    // 如果不想要 configProvide 动态设置主题需要把这个设置为 default
    // 只有设置为 variable， 才能使用 configProvide 动态设置主色调
    'root-entry-name': 'variable',
  },
  layout: {
    title: '后台管理系统',
  },
  routes,
  jsMinifier: 'esbuild',
  jsMinifierOptions: {
    drop: !isDev && ['console', 'debugger'],
  },
  define: {
    'process.env.SERVER': process.env.SERVER,
    'process.env.BASE_DOMAIN': domain,
    'process.env.PUBLIC_PATH': publicPath,
  },
  publicPath,
  tailwindcss: {},
});
