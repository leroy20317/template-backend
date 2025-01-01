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

const Pie = () => {
  const chartRef = useRef<echarts.ECharts | null>(null);
  const domRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    chartRef.current = echarts.init(domRef.current);
    chartRef.current.setOption({
      tooltip: {
        trigger: 'item',
      },
      legend: {
        type: 'scroll',
        orient: 'vertical',
        right: 10,
        top: 20,
        bottom: 20,
      },
      title: {
        text: '流量占用情况',
        left: 'center',
      },
      series: [
        {
          type: 'pie',
          radius: ['50%', '80%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderColor: '#fff',
            borderWidth: 2,
          },
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 1048, name: '分类一' },
            { value: 735, name: '分类二' },
            { value: 580, name: '分类三' },
            { value: 484, name: '分类四' },
            { value: 300, name: '分类五' },
          ],
        },
      ],
    });
    // 使用 ResizeObserver
    const resizeObserver = new ResizeObserver(() => {
      chartRef.current?.resize();
    });
    resizeObserver.observe(domRef.current!);

    // 清理函数
    return () => {
      resizeObserver.disconnect();
      chartRef.current?.dispose();
    };
  }, []);

  return <div ref={domRef} className="w-full h-full" />;
};

export default Pie;
