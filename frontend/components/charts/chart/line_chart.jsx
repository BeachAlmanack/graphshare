import React from 'react';
import { line } from 'd3-shape';
import { ascending } from 'd3-array';
import { values } from 'lodash';
import Axis from './axis';
import AxisLabels from './axis_labels';
import Scale from './scale';

class LineChart extends React.Component {
  render() {
    const paths = [];
    const rawRows = values(this.props.data.rows);

    const width = this.props.width;
    const height = this.props.height;
    const marginLeft = 30;
    
    const rows = rawRows.sort((x, y) => ascending(x[this.props.data.axis.x], y[this.props.data.axis.x]));
    const [scaleX, scaleY] = Scale(this.props.data, width, height);

    this.props.data.axis.y.forEach((columName, idx) => {
      const lineFunction = line()
        .x(d => scaleX(d[this.props.data.axis.x]))
        .y(d => scaleY(d[columName]));

      const path = (<path d={lineFunction(rows)} className="line" key={columName} transform={`translate(${marginLeft}, 0)`} className={`color-stroke-${idx}`} />);
      paths.push(path);
    });

    this.yAxis = <Axis scale={scaleY} axis="y" width={width - 30} height={height - 30} />;
    this.xAxis = <Axis scale={scaleX} axis="x" width={width - 30} height={height - 30} />;
    return (
      <svg width={width} height={height} className="chart">
        {this.yAxis}
        {this.xAxis}
        { paths.map(path => path) }
        <AxisLabels bottomAxis={this.props.data.axisNames.x} leftAxis={this.props.data.axisNames.y} width={width} height={height} />
      </svg>
    );
  }
}
export default LineChart;
