import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Chart from '../chart';

class ChartsIndex extends React.Component {
  componentDidMount() {
    this.props.fetchCharts(this.props.userId);
  }

  render() {
    const chartsId = Object.keys(this.props.charts);
    const title = this.props.userId === this.props.currentUserId ? (
      <div className="menu-bar">
        <h1>My charts</h1>
        <Link className="button-text" to="/charts/new">Create new chart</Link>
      </div>
    ) : (
        <div className="menu-bar">
          <h1>Charts</h1>
        </div>
      );

    return (
      <div className="chart-index">
        {title}
        <div className="chart-items">
          { chartsId.map(chartId => (
            <Link to={`/charts/${chartId}`} className="chart-item">
              <h2>{this.props.charts[chartId].title}</h2>
              <Chart
                key={chartId}
                chart={this.props.charts[chartId]}
                width={350}
                height={200}
                fetchChart={this.props.fetchChart}
              />
            </Link>
          ))}
            
        </div>
      </div>
    );
  }
}
export default ChartsIndex;
