import { BarChart } from 'echarts/charts';
import {
  DataZoomComponent,
  GridComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
} from 'echarts/components';
import * as echarts from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { useEffect, useRef } from 'react';

echarts.use([
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  DataZoomComponent,
  BarChart,
  CanvasRenderer,
]);

const dataCount = 50000;
function generateData(count: number) {
  let baseValue = Math.random() * 1000;
  let time = +new Date(2011, 0, 1);
  let smallBaseValue: number;

  function next(idx: number) {
    smallBaseValue =
      idx % 30 === 0
        ? Math.random() * 700
        : smallBaseValue + Math.random() * 500 - 250;
    baseValue += Math.random() * 20 - 10;
    return Math.max(0, Math.round(baseValue + smallBaseValue) + 3000);
  }

  const categoryData = [];
  const valueData = [];

  for (let i = 0; i < count; i++) {
    categoryData.push(
      echarts.format.formatTime('yyyy-MM-dd\nhh:mm:ss', time, false),
    );
    valueData.push(next(i).toFixed(2));
    time += 1000;
  }

  return {
    categoryData: categoryData,
    valueData: valueData,
  };
}

const data = generateData(dataCount);

const LargeDataBar = () => {
  const chartRef = useRef<echarts.ECharts | null>(null);
  const domRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    chartRef.current = echarts.init(domRef.current);
    chartRef.current.setOption({
      title: {
        text: echarts.format.addCommas(dataCount) + ' Data',
        left: 10,
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      grid: {
        left: '3%',
        right: '3%',
        bottom: '10%',
        top: '10%',
        containLabel: true,
      },
      dataZoom: [
        {
          type: 'inside',
        },
        {
          type: 'slider',
        },
      ],
      xAxis: {
        data: data.categoryData,
        silent: false,
        splitLine: {
          show: false,
        },
        splitArea: {
          show: false,
        },
      },
      yAxis: {
        splitArea: {
          show: false,
        },
      },
      series: [
        {
          type: 'bar',
          data: data.valueData,
          // Set `large` for large data amount
          large: true,
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

export default LargeDataBar;
