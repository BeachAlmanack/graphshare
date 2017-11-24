import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class DatasetsIndex extends React.Component {
  componentDidMount() {
    this.props.fetchDatasets(this.props.currentUserId);
  }

  render() {
    const { datasets } = this.props;
    const datasetsId = Object.keys(this.props.datasets).slice(0, 8);

    return (
      <div className="dataset-menu">
        <Link to="/datasets/"><h2> Most recent datasets </h2></Link>
        <ul>
          {datasetsId.map(datasetId => (
            <Link to={`/datasets/${datasetId}`}>
              <li key={datasetId} className="left-feed-menu-item">
                <p>{datasets[datasetId].title}</p>
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

export default DatasetsIndex;
