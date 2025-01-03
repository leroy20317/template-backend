const baseDomain = process.env.BASE_DOMAIN;
const staticHost = `${process.env.PUBLIC_PATH}static`;

const apiHost = `//api${baseDomain}`;
const url = {
  staticHost,
  wwwDomain: `https://www${baseDomain}`,
  userInfo: `${apiHost}/user/my-info`, // 获取用户信息
};
export default url;
