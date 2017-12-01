import React from 'react';
import { arc, pie } from 'd3-shape';
import { ascending } from 'd3-array';
import { values } from 'lodash';
import Axis from './axis';
import AxisLabels from './axis_labels';
import Scale from './scale';

class PieChart extends React.Component {
  render() {
    const paths = [];
    const rawRows = values(this.props.data.rows);

    const width = this.props.width;
    const height = this.props.height;
    const marginLeft = 30;

    const radius = Math.min(width, height) / 3;

    const rows = rawRows.sort((x, y) => ascending(x[this.props.data.axis.x], y[this.props.data.axis.x]));
    const [scaleX, scaleY] = Scale(this.props.data, width, height);

    const bandwidth = radius / this.props.data.axis.y.length

    this.props.data.axis.y.forEach((columName, idx) => {
      
      const lineFunction = arc()
        .outerRadius((bandwidth * idx) + bandwidth)
        .innerRadius(bandwidth * idx);

      const myPie = pie()
        .value(d => d[columName]);
        // .x(d => scaleX(d[this.props.data.axis.x]))
        // .y1(d => scaleY(d[columName]))
        // .y0(scaleY.range()[0]);
      const arcs = myPie(rows);

      arcs.forEach((d, i) => {
        const path = <path d={lineFunction(d)} key={i} transform={`translate(${width / 2}, ${height / 2})`} className={`color-fill-${i}`} />;
        paths.push(path);
      });

      // test.map((d, i) => {
      //   console.log(d);
      //   console.log(i);
      // });
      // const path = ();
      // paths.push(path);
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
export default PieChart;
