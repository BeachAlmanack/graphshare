import React from 'react';
import PropTypes from 'prop-types';
import { values } from 'lodash';
import Axis from './axis';
import Scale from './scale';
import AxisLabels from './axis_labels';

const Rects = (rows, bandWidth, xcb, ycb, index, height) => (
  rows.map(row => (
    <rect
      key={Math.random()}
      width={bandWidth}
      height={height - 30 - ycb(row)}
      transform={`translate(${(xcb(row) + (bandWidth * index)) + 30}, ${ycb(row)})`}
      className={`color-fill-${index + 1}`}
    />
  ))
);

const BarChart = ({ data, width, height }) => {
  const marginLeft = 30;
  const marginBottom = 30;
  
  const rows = values(data.rows);
  const { axisNames } = data;
  const [scaleX, scaleY] = Scale(data, rows, width, height, true);

  const xAxisColumn = data.axis.x;
  const yAxisColumns = data.axis.y;
  
  const numberOfBars = yAxisColumns.length;

  let bars = [];

  data.axis.y.forEach((columName, idx) => {
    const seriesRects = Rects(rows, (scaleX.bandwidth() / numberOfBars), (row => scaleX(row[xAxisColumn])), (row => scaleY(row[columName])), idx, height);
    bars = bars.concat(seriesRects);
  });

  const yAxis = <Axis scale={scaleY} axis="y" width={width - marginLeft} height={height - marginBottom} />;
  const xAxis = <Axis scale={scaleX} axis="x" width={width - marginLeft} height={height - marginBottom} />;
  return (
    <svg width={width} height={height} className="chart">
      {xAxis}
      {yAxis}
      {bars.map(bar => bar)}
      <AxisLabels bottomAxis={axisNames.x} leftAxis={axisNames.y} width={width} height={height} />
    </svg>
  );
};

BarChart.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  data: PropTypes.objectOf(Object).isRequired,
};


export default BarChart;
