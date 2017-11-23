import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import DatasetItem from './dataset_item';

class DatasetsIndex extends React.Component {
  componentDidMount() {
    this.props.fetchDatasets(this.props.userId);
  }

  render() {
    const datasetsId = Object.keys(this.props.datasets);

    return (
      <div className="dataset-index">
        <div className="menu-bar">
          <h1>My Datasets</h1>
          <Link className="button-outline" to="/datasets/new">Upload new dataset</Link>
        </div>
        {datasetsId.map(datasetId => <DatasetItem key={datasetId} dataset={this.props.datasets[datasetId]} />) }
      </div>
    );
  }
}

DatasetsIndex.propTypes = {
  datasets: PropTypes.objectOf(Object).isRequired,
  userId: PropTypes.number.isRequired,
  fetchDatasets: PropTypes.func.isRequired,
};

export default DatasetsIndex;