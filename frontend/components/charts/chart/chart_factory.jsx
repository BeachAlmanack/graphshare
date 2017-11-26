import React from 'react';
import { cloneDeep } from 'lodash';
import LineChart from './line_chart';
import BarChart from './bar_chart';
import convertData from '../../../utils/data/data_convert';
import { CATEGORICAL } from '../../../utils/constants/data_types';
import * as ChartType from '../../../utils/constants/chart_types';

class ChartFactory {
  static build(chart) {
    switch (chart.type) {
      case ChartType.LINE:
        return <LineChart data={convertData(chart.data)} />;
      case ChartType.BAR: {
        const dataCopy = cloneDeep(chart.data);
        dataCopy.header[dataCopy.axis.x] = CATEGORICAL;
        return <BarChart data={convertData(dataCopy)} />;
      }
      default:
        return <div />;
    }
  }
}

export default ChartFactory;
