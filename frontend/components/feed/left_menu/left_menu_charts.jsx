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
    const chartsId = Object.keys(this.props.charts).slice(0, 8);

    return (
      <div className="chart-menu">
        <Link to="/charts/"><h2> Most recent charts </h2></Link>
        <ul>
          {chartsId.map(chartId => (
            <Link to={`/charts/${chartId}`}>
              <li key={chartId} className="left-feed-menu-item">
                <i className={`fa fa-${charts[chartId].chart_type}-chart fa-lg`} aria-hidden="true" />
                <p>{charts[chartId].title}</p>
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
