import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class LeftMenuDatasets extends React.Component {
  componentDidMount() {
    this.props.fetchDatasets(this.props.currentUserId);
  }

  render() {
    const { datasets } = this.props;

    return (
      <div className="dataset-menu">
        <Link to="/datasets/"><h2> My recent datasets </h2></Link>
        <ul>
          {datasets.map(dataset => (
            <Link to={`/datasets/${dataset.id}`} key={dataset.id}>
              <li className="left-feed-menu-item">
                <p>{dataset.title}</p>
                <i className="fa fa-angle-right fa-lg" aria-hidden="true"></i>
              </li>
            </Link>
          ))}
        </ul>
        <Link className="left-menu-button" to="/datasets/new">Upload new dataset</Link>
      </div>
    );
  }
}

export default LeftMenuDatasets;
