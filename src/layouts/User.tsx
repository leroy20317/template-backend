import { Outlet } from '@umijs/max';
import { ConfigProvider } from 'antd';
const User = () => {
  return (
    <ConfigProvider theme={{ token: { colorPrimary: '#FF8135' } }}>
      <div
        className="h-screen w-screen bg-white flex flex-col justify-center items-center"
        style={{
          backgroundImage:
            'url(https://mdn.alipayobjects.com/huamei_gcee1x/afts/img/A*y0ZTS6WLwvgAAAAAAAAAAAAADml6AQ/fmt.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Outlet />
      </div>
    </ConfigProvider>
  );
};

export default User;
