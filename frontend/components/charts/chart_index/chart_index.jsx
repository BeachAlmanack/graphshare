import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Chart from '../chart';

class ChartsIndex extends React.Component {
  componentDidMount() {
    this.props.fetchCharts(this.props.userId);
  }

  render() {
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
          { this.props.charts.map(chart => (
            <Link to={`/charts/${chart.id}`} className="chart-item">
              <h2>{chart.title}</h2>
              <Chart
                key={chart.id}
                chart={chart}
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
