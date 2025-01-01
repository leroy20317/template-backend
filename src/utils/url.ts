const baseDomain = process.env.BASE_DOMAIN;
const packageName = process.env.npm_package_name;
const staticHost =
  process.env.NODE_ENV === 'production'
    ? `//cdn${baseDomain}/${packageName}/dist/static`
    : '/static';

const apiHost = `//api${baseDomain}`;
const url = {
  staticHost,
  wwwDomain: `https://www${baseDomain}`,
  userInfo: `${apiHost}/user/my-info`, // 获取用户信息
};
export default url;
