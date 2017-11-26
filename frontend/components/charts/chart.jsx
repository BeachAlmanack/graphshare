import React from 'react';
import ChartFactory from './chart/chart_factory';

export default function Chart({ chart }) {
  if (chart) {
    const chartComponent = ChartFactory.build(chart);
    return (
      <div>
        {chartComponent}
      </div>
    );
  }
  return (<div>loading</div>);
}
