import url from '@/utils/url';
import { request } from '@umijs/max';

type UserInfo = {
  name?: string;
  avatar?: string;
  userid?: string;
  email?: string;
  signature?: string;
  title?: string;
  group?: string;
  tags?: Array<{ key: string; label: string }>;
};
export async function currentUser(params?: any): Promise<UserInfo> {
  return {
    name: 'admin',
    avatar:
      'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
    userid: '00000001',
    email: 'admin@admin.com',
    signature: '海纳百川，有容乃大',
    title: '交互专家',
    group: '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
    tags: [
      {
        key: '0',
        label: '很有想法的',
      },
    ],
  } as API.UserInfo;
  return request<UserInfo>(url.userInfo, {
    method: 'GET',
    params,
  });
}
