import { history } from '@umijs/max';
import { Button, Result } from 'antd';

const NoFoundPage = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" onClick={() => history.push('/')}>
          Back Home
        </Button>
      }
    />
  );
};
export default NoFoundPage;
