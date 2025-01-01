import { PieChart } from 'echarts/charts';
import { LegendComponent, TooltipComponent } from 'echarts/components';
import * as echarts from 'echarts/core';
import { LabelLayout } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import { useEffect, useRef } from 'react';

echarts.use([
  TooltipComponent,
  LegendComponent,
  PieChart,
  CanvasRenderer,
  LabelLayout,
]);

const CircleChart = () => {
  const chartRef = useRef<echarts.ECharts | null>(null);
  const domRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    chartRef.current = echarts.init(domRef.current);
    chartRef.current.setOption({
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['60%', '90%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            disabled: true,
          },
          labelLine: {
            show: false,
          },
          data: [{ value: 1048 }, { value: 735 }],
        },
      ],
    });
  }, []);

  return <div ref={domRef} style={{ width: 80, height: 80 }} />;
};

export default CircleChart;
