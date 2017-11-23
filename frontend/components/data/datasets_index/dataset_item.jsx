import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const DatasetItem = ({ dataset }) => {
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

DatasetItem.propTypes = {
  dataset: PropTypes.objectOf(Object).isRequired,
};

export default DatasetItem;
