const baseDomain = process.env.BASE_DOMAIN;

const apiHost = `//api${baseDomain}`;
const url = {
  wwwDomain: `https://www${baseDomain}`,
  userInfo: `${apiHost}/user/my-info`, // 获取用户信息
};
export default url;
