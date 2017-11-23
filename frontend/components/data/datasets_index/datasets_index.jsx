import React from 'react';
import _ from 'lodash';
import {Link} from 'react-router-dom';

const DatasetItem = ({dataset}) => {
  const columnNames = Object.keys(dataset.header);
  const dataTypes = _.values(dataset.header);
  return (
    <Link to={`/datasets/${dataset.id}`}>
    <div className="dataset-item">
      <h2> {dataset.title} </h2><p>   - {dataset.file_name} </p>
      
      { 
      dataTypes.map((dataType, idx) => (
        
        <ul key={columnNames[idx]}>
          <li>{columnNames[idx]}</li>
          <li className={`datatype-${dataType}`}>{dataType}</li>
        </ul>
        
      ))
     
    }
      
    </div>
    </Link>
  );
};

class DatasetsIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchDatasets(this.props.userId);
  }

  render() {
    const datasetsId = Object.keys(this.props.datasets);

    return (
      <div className="dataset-index">
        <h1> My Datasets </h1>
        {datasetsId.map(datasetId => <DatasetItem key={datasetId} dataset={this.props.datasets[datasetId]} />) }
      </div>
    );
  }
}

export default DatasetsIndex;
