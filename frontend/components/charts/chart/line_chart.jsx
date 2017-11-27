import React from 'react';
import { line } from 'd3-shape';
import { ascending } from 'd3-array';
import { values } from 'lodash';
import Axis from './axis';
import Scale from './scale';

class LineChart extends React.Component {
  render() {
    const paths = [];
    const rawRows = values(this.props.data.rows);
    
    const rows = rawRows.sort((x, y) => ascending(x[this.props.data.axis.x], y[this.props.data.axis.x]));
    const [scaleX, scaleY] = Scale(this.props.data);

    this.props.data.axis.y.forEach((columName, idx) => {
      const lineFunction = line()
        .x(d => scaleX(d[this.props.data.axis.x]))
        .y(d => scaleY(d[columName]));

      const path = (<path d={lineFunction(rows)} className="line" key={columName} transform="translate(20, 0)" className={`color-stroke-${idx}`} />);
      paths.push(path);
    });

    this.yAxis = <Axis scale={scaleY} axis="y" />;
    this.xAxis = <Axis scale={scaleX} axis="x" />;

    return (
      <svg width="530" height="220" className="chart">
        {this.yAxis}
        {this.xAxis}
        { paths.map(path => path) }
      </svg>
    );
  }
}
export default LineChart;
