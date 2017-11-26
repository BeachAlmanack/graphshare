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
          dataTypes.slice(0, 9).map((dataType, idx) => (

            <ul key={columnNames[idx]}>
              <li>{columnNames[idx]}</li>
              <li className={`datatype-${dataType.replace(/\(.*?\)/, '')}`}>{dataType}</li>
            </ul>
          ))
        }
        { dataTypes.length > 9 ? <p>{dataTypes.length - 9} more columns...</p> : '' }
      </div>
    </Link>
  );
};

DatasetItem.propTypes = {
  dataset: PropTypes.objectOf(Object).isRequired,
};

export default DatasetItem;
