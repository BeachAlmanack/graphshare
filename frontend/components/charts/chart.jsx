import React from 'react';
import ChartFactory from './chart/chart_factory';

class Chart extends React.Component {

  componentDidMount() {
    console.log('component did mount');
    if (!this.props.chart || !this.props.chart.data) {
      this.props.fetchChart(this.props.chartId);
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.chartId && this.props.chartId !== newProps.chartId) {
      this.props.fetchChart(newProps.chartId);
    }
  }

  render() {
    const { chart, width, height } = this.props;

    if (chart && chart.data) {
      return (
        <div className="chart-container">
          {ChartFactory.build(chart, width, height)}


            <ul className="labels" data-width={width} style={{ width: (width + 42) }}>
              {
                chart.data.axis.y.map((label, idx) => (
                  <li key={label}>
                    <i className={`fa fa-square color-${idx}`} aria-hidden="true" />{label}
                  </li>
                ))
              }
            </ul>

        </div>
      );
    }
    return (<div>loading</div>);
  }
}

export default Chart;

