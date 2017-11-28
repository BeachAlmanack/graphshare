import React from 'react';
import ChartFactory from './chart/chart_factory';

class Chart extends React.Component {

  componentDidMount() {
    console.log('component did mount');
    if (!this.props.chart || (this.props.chart && this.props.chart.id !== 'new')) {
      this.props.fetchChart(this.props.chartId);
    }
  }

  componentWillReceiveProps(newProps) {
    console.log(`component will receive props with id ${newProps.chatId}`);
    if (this.props.chartId !== newProps.chartId) {
      this.props.fetchChart(newProps.chartId);
    }
  }

  render() {
    const { chart, width, height } = this.props;
    if (chart && chart.data) {
      return (
        <div>
          {ChartFactory.build(chart, width, height)}

          {chart.data.axis.y.length > 1 ?
            <ul className="labels" style={{ width: (width + 42) }}>
              {
                chart.data.axis.y.map((label, idx) => (
                  <li key={label}>
                    <i className={`fa fa-square color-${idx}`} aria-hidden="true" />{label}
                  </li>
                ))
              }
            </ul>
            : ''}
        </div>
      );
    }
    return (<div>loading</div>);
  }
}

export default Chart;

