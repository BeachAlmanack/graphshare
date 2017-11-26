import React from 'react';
import _ from 'lodash';
import Axis from './axis';
import Scale from './scale';

const Rects = (rows, bandWidth, xcb, ycb, index) => {
  console.log(index * bandWidth);
  return rows.map(row => (
    <rect width={bandWidth} height={ycb(row)} transform={`translate(${(xcb(row) + (bandWidth * index)) + 20}, ${190 - ycb(row)})`} className={`color-fill-${index}`} />
  ));
}

class BarChart extends React.Component {


  render() {
    this.bars = [];
    const rows = _.values(this.props.data.rows);

    const [scaleX, scaleY] = Scale(this.props.data, true);
    const numberOfBars = this.props.data.axis.y.length;
    this.props.data.axis.y.forEach((columName, idx) => {
      const seriesRect = Rects(rows, (scaleX.bandwidth() / numberOfBars), (row => scaleX(row[this.props.data.axis.x])), (row => scaleY(row[columName])), idx);
      this.bars = this.bars.concat(seriesRect);
    });

    this.yAxis = <Axis scale={scaleY} axis='y' />
    this.xAxis = <Axis scale={scaleX} axis='x' />
    return (
      <svg width="530" height="220" className="chart">
        {this.xAxis}
        {this.yAxis}
        {this.bars.map(bar => bar)}
      </svg>
    );
  }
}

export default BarChart;
