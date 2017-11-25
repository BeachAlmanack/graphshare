import React from 'react';
import LineChart from './line_chart';
import BarChart from './bar_chart';
import convertData from '../../../utils/data/data_convert';

class ChartFactory {
  static build(chart) {
    const convertedData = convertData(chart.data);
    switch (chart.type) {
      case 'Line':
        return <LineChart data={convertedData} />;
      case 'Bar':
        return <BarChart data={convertedData} />;
      default:
        return <div />;
    }
  }
}

export default ChartFactory;
