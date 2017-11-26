import React from 'react';
import { cloneDeep } from 'lodash';
import LineChart from './line_chart';
import BarChart from './bar_chart';
import convertData from '../../../utils/data/data_convert';

class ChartFactory {
  static build(chart) {
    switch (chart.type) {
      case 'line':
        return <LineChart data={convertData(chart.data)} />;
      case 'bar': {
        const dataCopy = cloneDeep(chart.data);
        dataCopy.header[dataCopy.axis.x] = 'Categorical';
        return <BarChart data={convertData(dataCopy)} />;
      }
      default:
        return <div />;
    }
  }
}

export default ChartFactory;
