import { QuestionCircleOutlined } from '@ant-design/icons';
import { Link, useModel } from '@umijs/max';
import { Space } from 'antd';
import React from 'react';
import Avatar from './AvatarDropdown';
import styles from './index.less';
export type SiderTheme = 'light' | 'dark';

const GlobalHeaderRight: React.FC = () => {
  const { initialState } = useModel('@@initialState');

  if (!initialState || !initialState.settings) {
    return null;
  }

  let className = styles.right;

  return (
    <Space className={className}>
      <Link to="/user/login">登录</Link>
      <Link to="/user/register">注册</Link>
      <span
        className={styles.action}
        onClick={() => {
          window.open('https://pro.ant.design/docs/getting-started');
        }}
      >
        <QuestionCircleOutlined />
      </span>
      <Avatar menu />
    </Space>
  );
};

export default GlobalHeaderRight;
