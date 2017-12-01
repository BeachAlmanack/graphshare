import React from 'react';
import { values } from 'lodash';
import Axis from './axis';
import Scale from './scale';
import AxisLabels from './axis_labels';

const Rects = (rows, bandWidth, xcb, ycb, index, height) => (
  rows.map(row => (
    <rect
      key={(xcb(row) + (bandWidth * index)) + 30}
      width={bandWidth}
      height={height - 30 - ycb(row)}
      transform={`translate(${(xcb(row) + (bandWidth * index)) + 30}, ${ycb(row)})`}
      className={`color-fill-${index + 1}`}
    />
  ))
);

class BarChart extends React.Component {
  
  render() {
    this.bars = [];
    const width = this.props.width;
    const height = this.props.height;
    const marginLeft = 30;

    const rows = values(this.props.data.rows);
    const [scaleX, scaleY] = Scale(this.props.data, rows, width, height, true);
    
    const numberOfBars = this.props.data.axis.y.length;
    let rotate = false;
    this.props.data.axis.y.forEach((columName, idx) => {
      const seriesRect = Rects(rows, (scaleX.bandwidth() / numberOfBars), (row => scaleX(row[this.props.data.axis.x])), (row => scaleY(row[columName])), idx, height);
      rotate = (seriesRect.length > 8);
      this.bars = this.bars.concat(seriesRect);
    });
    this.yAxis = <Axis scale={scaleY} axis="y" width={width - 30} height={height - 30} />;
    this.xAxis = <Axis scale={scaleX} axis="x" width={width - 30} height={height - 30} />;
    return (
      <svg width={width} height={height} className="chart">
        {this.xAxis}
        {this.yAxis}
        {this.bars.map(bar => bar)}
        <AxisLabels bottomAxis={this.props.data.axisNames.x} leftAxis={this.props.data.axisNames.y} width={width} height={height} />
      </svg>
    );
  }
}

export default BarChart;
