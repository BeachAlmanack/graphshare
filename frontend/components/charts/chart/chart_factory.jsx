import React from 'react';
import LineChart from './line_chart';
import BarChart from './bar_chart';
import convertData from '../../../utils/data/data_convert';

class ChartFactory {
  static build(chart) {
    const convertedData = convertData(chart.data);
    console.log('getting to the factory');
    console.log(convertedData);
    switch (chart.type) {
      case 'line':
        return <LineChart data={convertedData} />;
      case 'bar':
        return <BarChart data={convertedData} />;
      default:
        return <div />;
    }
  }
}

export default ChartFactory;
