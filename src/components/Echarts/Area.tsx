import { LineChart } from 'echarts/charts';
import { GridComponent } from 'echarts/components';
import * as echarts from 'echarts/core';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import { useEffect, useRef } from 'react';

echarts.use([GridComponent, LineChart, CanvasRenderer, UniversalTransition]);

const Area = () => {
  const domRef = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<echarts.ECharts | null>(null);
  useEffect(() => {
    chartRef.current = echarts.init(domRef.current);
    chartRef.current.setOption({
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },

      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'line',
        },
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgba(58,77,233,0.8)', // 渐变的起始颜色
              },
              {
                offset: 1,
                color: 'rgba(58,77,233,0.1)', // 渐变的结束颜色
              },
            ]),
          },
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
  return <div ref={domRef} className="w-full h-full"></div>;
};

export default Area;
