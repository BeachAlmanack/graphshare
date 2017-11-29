import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Modal from '../../util/modal';
import NewPostContainer from '../../posts/new_post_container';
import DatasetItem from '../datasets_index/dataset_item';

class DatasetShowMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = { showNewPost: false };
    this.toggleNewPost = this.toggleNewPost.bind(this);
  }

  toggleNewPost() {
    this.setState({
      showNewPost: !this.state.showNewPost
    });
  }

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
              <button onClick={this.toggleNewPost} className="button-text">Post</button>
            <Link to={`/datasets/`} className="button-text"> My Datasets </Link>
            <Link to={`/charts/new/${dataset.id}`} className="button-text"> Create Chart from Data </Link>
            <button onClick={this.deleteDataset(dataset.id)} className="button-text-red"> Delete </button>
            
            </div> : <div className="right-menu">
              Created by { this.props.users[dataset.author_id].username }
            </div>
          }
          <Modal show={this.state.showNewPost} onClose={this.toggleNewPost}>
            <NewPostContainer contentType="Dataset" contentId={dataset.id}>
              <DatasetItem dataset={dataset} />
            </NewPostContainer>
          </Modal>
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
