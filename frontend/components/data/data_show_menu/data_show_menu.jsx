import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const DatasetShowMenu = ({ dataset }) => {
  if (dataset) {
    return (
      <div className="menu-bar">
        <div className="left-menu">
          <h1>{dataset.title}</h1> <p>{dataset.file_name}</p>
        </div>
        <div className="right-menu">
          <Link to={`/datasets/${dataset.id}`} className="button-text"> Create Chart from Data </Link>
          <Link to={`/datasets/${dataset.id}`} className="button-text-red"> Delete </Link>
        </div>
      </div>
    );
  }
  return (<div />);
};

DatasetShowMenu.propTypes = {
  dataset: PropTypes.objectOf(Object),
};

DatasetShowMenu.defaultProps = {
  dataset: undefined,
};

export default DatasetShowMenu;
