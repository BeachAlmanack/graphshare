import React from 'react';
import ChartFactory from './chart/chart_factory';

export default function Chart({ chart }) {
  if (chart) {
    return (
      <div>
        {ChartFactory.build(chart)}
      </div>
    );
  }
  return (<div>loading</div>);
}
