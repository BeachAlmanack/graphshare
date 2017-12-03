import React from 'react';
import PropTypes from 'prop-types';
import { line } from 'd3-shape';
import { ascending } from 'd3-array';
import { values } from 'lodash';
import Axis from './axis';
import AxisLabels from './axis_labels';
import Scale from './scale';

const LineChart = ({ width, height, data }) => {
  const rows = values(data.rows);
  const { axisNames } = data;

  const marginLeft = 30;
  const marginTop = 30;

  const xAxisColumn = data.axis.x;
  const yAxisColumns = data.axis.y;
  
  const sortedRows = rows.sort((x, y) => ascending(x[xAxisColumn], y[xAxisColumn]));

  const [scaleX, scaleY] = Scale(data, sortedRows, width, height);

  const linePaths = [];
  
  yAxisColumns.forEach((yAxisColumn, idx) => {
    const lineFunction = line()
      .x(d => scaleX(d[xAxisColumn]))
      .y(d => scaleY(d[yAxisColumn]));

    const path = (<path
      d={lineFunction(sortedRows)}
      className={`line color-stroke-${idx + 1}`}
      key={yAxisColumn}
      transform={`translate(${marginLeft}, 0)`}
    />);
    linePaths.push(path);
  });

  const yAxis = <Axis scale={scaleY} axis="y" width={width - marginLeft} height={height - marginTop} />;
  const xAxis = <Axis scale={scaleX} axis="x" width={width - marginLeft} height={height - marginTop} />;

  return (
    <svg width={width} height={height} className="chart">
      {yAxis}
      {xAxis}
      { linePaths.map(path => path) }
      <AxisLabels bottomAxis={axisNames.x} leftAxis={axisNames.y} width={width} height={height} />
    </svg>
  );
};

LineChart.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  data: PropTypes.objectOf(Object).isRequired,
};

export default LineChart;
