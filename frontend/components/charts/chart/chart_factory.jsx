import React from 'react';
import { cloneDeep } from 'lodash';
import LineChart from './line_chart';
import BarChart from './bar_chart';
import convertData from '../../../utils/data/data_convert';
import { CATEGORICAL } from '../../../utils/constants/data_types';
import * as ChartType from '../../../utils/constants/chart_types';

class ChartFactory {
  static build(chart, width, height) {
    switch (chart.chart_type) {
      case ChartType.LINE:
        return <LineChart data={convertData(chart.data)} width={width} height={height} />;
      case ChartType.BAR: {
        const dataCopy = cloneDeep(chart.data);
        dataCopy.header[dataCopy.axis.x] = CATEGORICAL;
        return <BarChart data={convertData(dataCopy)} width={width} height={height} />;
      }
      default:
        return <div className="empty-chart" style={{ backgroundColor: 'blue', width, height }} />;
    }
  }
}

export default ChartFactory;
