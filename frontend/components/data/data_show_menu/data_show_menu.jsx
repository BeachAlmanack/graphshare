import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class DatasetShowMenu extends React.Component {

  deleteDataset(id) {
    return () => this.props.deleteDataset(id).then(() => this.props.history.push('/datasets'));
  }

  render() {
    const { dataset, userId } = this.props;
    if (dataset) {
      return (
        <div className="menu-bar">
          <div className="left-menu">
            <h1>{dataset.title}</h1> <p>{dataset.file_name}</p>
          </div>
          {userId === dataset.author_id ?
          <div className="right-menu">
            
            <Link to={`/datasets/`} className="button-text"> My Datasets </Link>
            <Link to={`/datasets/${dataset.id}`} className="button-text"> Create Chart from Data </Link>
            <button onClick={this.deleteDataset(dataset.id)} className="button-text-red"> Delete </button>
            
            </div> : <div className="right-menu">
              Author Name to be put here
            </div>}
        </div>
      );
    }
    return (<div />);
  }

};

DatasetShowMenu.propTypes = {
  dataset: PropTypes.objectOf(Object),
};

DatasetShowMenu.defaultProps = {
  dataset: undefined,
};

export default DatasetShowMenu;
