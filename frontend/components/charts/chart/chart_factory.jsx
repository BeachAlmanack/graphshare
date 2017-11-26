import React from 'react';
import LineChart from './line_chart';
import BarChart from './bar_chart';
import convertData from '../../../utils/data/data_convert';

class ChartFactory {
  static build(chart) {
    switch (chart.type) {
      case 'line':
        return <LineChart data={convertData(chart.data)} />;
      case 'bar':
        return <BarChart data={convertData(chart.data)} />;
      default:
        return <div />;
    }
  }
}

export default ChartFactory;
