import { Link } from '@umijs/max';
import { Button, Result } from 'antd';
import React from 'react';
import styles from './index.less';

const actions = (
  <div className={styles.actions}>
    <a href="">
      <Button size="large" type="primary">
        <span>查看邮箱</span>
      </Button>
    </a>
    <Link to="/">
      <Button size="large">返回首页</Button>
    </Link>
  </div>
);

export type LocationState = Record<string, unknown>;

const RegisterResult: React.FC = () => {
  return (
    <Result
      className={styles.registerResult}
      status="success"
      title={
        <div className={styles.title}>
          <span>你的账户注册成功</span>
        </div>
      }
      subTitle="激活邮件已发送到你的邮箱中，邮件有效期为24小时。请及时登录邮箱，点击邮件中的链接激活帐户。"
      extra={actions}
    />
  );
};

export default RegisterResult;
