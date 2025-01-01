import { LogoutOutlined } from '@ant-design/icons';
import { history, useModel } from '@umijs/max';
import { Avatar, Dropdown, Spin } from 'antd';
import { stringify } from 'querystring';
import React from 'react';
import styles from './index.less';

export type GlobalHeaderRightProps = {
  menu?: boolean;
};

/**
 * 退出登录，并且将当前的 url 保存
 */
const loginOut = async () => {
  const { search, pathname } = history.location;
  const query = Object.fromEntries(new URLSearchParams(search));
  const { redirect } = query;
  // Note: There may be security issues, please note
  if (window.location.pathname !== '/user/login' && !redirect) {
    history.replace({
      pathname: '/user/login',
      search: stringify({
        redirect: pathname + search,
      }),
    });
  }
};

const AvatarDropdown: React.FC<GlobalHeaderRightProps> = () => {
  const { initialState, setInitialState } = useModel('@@initialState');

  const loading = (
    <span className={`${styles.action} ${styles.account}`}>
      <Spin
        size="small"
        style={{
          marginLeft: 8,
          marginRight: 8,
        }}
      />
    </span>
  );

  if (!initialState) {
    return loading;
  }

  const { currentUser } = initialState;

  if (!currentUser || !currentUser.name) {
    return loading;
  }
  return (
    <Dropdown
      menu={{
        items: [
          {
            label: '退出登录',
            key: 'logout',
            icon: <LogoutOutlined />,
            onClick: () => {
              setInitialState((s: any) => ({ ...s, currentUser: undefined }));
              loginOut();
            },
          },
        ],
      }}
    >
      <span className={`${styles.action} ${styles.account}`}>
        <Avatar
          size="small"
          className={styles.avatar}
          src={currentUser.avatar}
          alt="avatar"
        />
        <span className={`${styles.name} anticon`}>{currentUser.name}</span>
      </span>
    </Dropdown>
  );
};

export default AvatarDropdown;
