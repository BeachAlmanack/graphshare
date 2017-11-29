import React from 'react';
import PropTypes from 'prop-types';
import * as ChartType from '../../../utils/api/charts_util';
import { Link } from 'react-router-dom';

class LeftMenuCharts extends React.Component {
  componentDidMount() {
    this.props.fetchCharts(this.props.currentUserId);
  }

  render() {
    const { charts } = this.props;

    return (
      <div className="chart-menu">
        <Link to="/charts/"><h2> My recent charts </h2></Link>
        <ul>
          {charts.map(chart => (
            <Link to={`/charts/${chart.id}`}>
              <li key={chart.id} className="left-feed-menu-item">
                <p>{chart.title}</p>
                <i className="fa fa-angle-right fa-lg" aria-hidden="true"></i>
              </li>
            </Link>
          ))}
        </ul>
        <Link className="left-menu-button" to="/charts/new">Create a chart</Link>
      </div>
    );
  }
}

export default LeftMenuCharts;
