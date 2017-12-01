import React from 'react';
import { area } from 'd3-shape';
import { ascending } from 'd3-array';
import { values } from 'lodash';
import Axis from './axis';
import AxisLabels from './axis_labels';
import Scale from './scale';
import * as DataType from '../../../utils/constants/data_types';

class AreaChart extends React.Component {
  render() {
    const paths = [];
    const rawRows = values(this.props.data.rows);

    const width = this.props.width;
    const height = this.props.height;
    const marginLeft = 30;
    
    const rows = rawRows.sort((x, y) => ascending(x[this.props.data.axis.x], y[this.props.data.axis.x]));

    const [scaleX, scaleY] = Scale(this.props.data, rows, width, height);

    this.props.data.axis.y.forEach((columName, idx) => {
      
      const lineFunction = area()
        .x(d => scaleX(d[this.props.data.axis.x]))
        .y1(d => scaleY(d[columName]))
        .y0(scaleY.range()[0]);

      const path = (<path d={lineFunction(rows)} key={columName} transform={`translate(${marginLeft}, 0)`} className={`color-fill-${idx + 1}`} />);
      paths.push(path);
    });

    this.yAxis = <Axis scale={scaleY} axis="y" width={width - 30} height={height - 30} />;
    this.xAxis = <Axis scale={scaleX} axis="x" width={width - 30} height={height - 30} />;
    return (
      <svg width={width} height={height} className="chart">
        {this.yAxis}
        {this.xAxis}
        {paths.map(path => path)}
        <AxisLabels bottomAxis={this.props.data.axisNames.x} leftAxis={this.props.data.axisNames.y} width={width} height={height} />
      </svg>
    );
  }
}
export default AreaChart;
