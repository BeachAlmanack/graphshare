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
    if ((!this.props.chart || !this.props.chart.data) && this.props.chartId) {
      this.props.fetchChart(this.props.chartId).then(this.fitParentContainer);
    }
    setTimeout(() => {
      this.fitParentContainer();
    }, 0);
    window.addEventListener('resize', this.fitParentContainer);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.chartId && this.props.chartId !== newProps.chartId) {
      this.props.fetchChart(newProps.chartId).then(this.fitParentContainer);
    }
    setTimeout(() => {
      this.fitParentContainer();
    }, 0);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.fitParentContainer);
  }

  fitParentContainer() {
    const { containerWidth } = this.state;
    if (this.chartContainer) {
      const currentContainerWidth = this.chartContainer
        .getBoundingClientRect().width;

      const shouldResize = containerWidth !== currentContainerWidth;

      if (shouldResize) {
        this.setState({
          containerWidth: currentContainerWidth,
        });
      }
    }
  }


  render() {
    const { chart, width, height } = this.props;

    if (chart && chart.data) {
      return (
        <div className="chart-container" ref={(el) => { this.chartContainer = el; }}>
          { this.state.containerWidth ? (
            <div>
              {ChartFactory.build(chart, this.state.containerWidth - 72, height - 30)}

              <ul className="labels" data-width={width} style={{ width: (this.state.containerWidth - 30) }}>
                {
                  chart.data.axis.y.map((label, idx) => (
                    <li key={label}>
                      <i className={`fa fa-square color-${idx + 1}`} aria-hidden="true" />{label}
                    </li>
                  ))
                }
              </ul>
            </div>
          ) : '' }
        </div>
      );
    }
    return <div />;
  }
}

export default Chart;

