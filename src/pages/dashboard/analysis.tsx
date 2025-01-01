import CircleChart from '@/components/Echarts/Circle';
import LargeDataBar from '@/components/Echarts/LargeDataBar';
import {
  PageContainer,
  ProCard,
  StatisticCard,
} from '@ant-design/pro-components';
import { Progress } from 'antd';

const { Statistic, Divider } = StatisticCard;

const Analysis = () => {
  return (
    <PageContainer ghost>
      <StatisticCard.Group>
        <StatisticCard
          statistic={{
            title: '总流量(人次)',
            value: 601986875,
          }}
        />
        <Divider type="vertical" />
        <StatisticCard
          statistic={{
            title: '付费流量',
            value: 3701928,
            description: <Statistic title="占比" value="61.5%" />,
          }}
          chart={<CircleChart />}
          chartPlacement="left"
        />
        <StatisticCard
          statistic={{
            title: '免费流量',
            value: 1806062,
            description: <Statistic title="占比" value="38.5%" />,
          }}
          chart={
            <div>
              <Progress
                size={80}
                strokeWidth={10}
                type="circle"
                percent={75}
                showInfo={false}
              />
            </div>
          }
          chartPlacement="left"
        />
      </StatisticCard.Group>
      <ProCard
        title="流量走势"
        extra="extra"
        tooltip="这是提示"
        className="mt-4"
      >
        <div className="w-full h-[700px]">
          <LargeDataBar />
        </div>
      </ProCard>
    </PageContainer>
  );
};

export default Analysis;
