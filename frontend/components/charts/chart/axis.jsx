import React from 'react';
import { axisLeft, axisBottom } from 'd3-axis';
import { select } from 'd3-selection';

class Axis extends React.Component {
  componentDidMount() {
    this.renderAxis();
  }

  componentDidUpdate() {
    this.renderAxis();
  }

  renderAxis() {
    const { scale } = this.props;
    let axis = undefined;
    if (this.props.axis === 'y') {
      axis = axisLeft(scale).ticks(5, 's');
    } else {
      axis = axisBottom(scale).ticks(10);
    }

    select(this.node).call(axis);
  }

  render() {
    const translate = (this.props.axis === 'y') ? 'translate(30, 0)' : 'translate(20, 190)';
    return <g className="axis" ref={node => this.node = node} height="100" width="500" transform={translate} />;
  }
}

export default Axis;
