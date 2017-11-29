import React from 'react';
import ChartFactory from './chart/chart_factory';

class Chart extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      containerWidth: null,
    };

    this.fitParentContainer = this.fitParentContainer.bind(this);
  }

  componentDidMount() {
    console.log('component did mount');
    if (!this.props.chart || !this.props.chart.data) {
      this.props.fetchChart(this.props.chartId).then(this.fitParentContainer);
    } else {
      this.fitParentContainer();
    }
    window.addEventListener('resize', this.fitParentContainer);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.chartId && this.props.chartId !== newProps.chartId) {
      this.props.fetchChart(newProps.chartId);
      this.fitParentContainer();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.fitParentContainer);
  }

  fitParentContainer() {
    const { containerWidth } = this.state;
    const currentContainerWidth = this.chartContainer
      .getBoundingClientRect().width;

    const shouldResize = containerWidth !== currentContainerWidth;

    if (shouldResize) {
      this.setState({
        containerWidth: currentContainerWidth,
      });
    }
  }


  render() {
    const { chart, width, height } = this.props;

    if (chart && chart.data) {
      return (
        <div className="chart-container" ref={(el) => { this.chartContainer = el; }}>
          
          {this.state.containerWidth ? ChartFactory.build(chart, this.state.containerWidth - 72, height) : ''}

          <ul className="labels" data-width={width} style={{ width: (this.state.containerWidth - 30) }}>
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

