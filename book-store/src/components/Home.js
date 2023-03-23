import React from "react";
import ReactECharts from 'echarts-for-react';

function Home() {

  const options = {
    grid: { top: 5, right: 5, bottom: 24, left: 36 },
    xAxis: {
      type: 'category',
      data: ['Action', 'Aventure', 'History', 'Drama', 'Fiction'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [1520, 932, 652, 1002, 2569],
        type: 'bar',
        smooth: true,
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
  };

  return (
    <>
      <div className="listTitle" style={{}}>Books by clasification</div>
      <div className="w-full">
        <ReactECharts option={options}/>
      </div>
    </>
  );
}

export default Home;
