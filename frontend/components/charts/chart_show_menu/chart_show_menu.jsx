import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Modal from '../../util/modal';
import NewPost from '../../posts/new_post';
import Chart from '../chart';

class ChartShowMenu extends React.Component {

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

  render() {
    const { chart, userId } = this.props;
    if (chart) {
      return (
        <div className="menu-bar">
          <div className="left-menu">
            <h1>{chart.title}</h1>
          </div>
          {userId === chart.author_id ?
            <div className="right-menu">
              <button onClick={this.toggleNewPost} className="button-text">Post</button>
              <Link to={`/charts/`} className="button-text">My Charts</Link>
              { chart.dataset_id ? <Link to={`/datasets/${chart.dataset_id}`} className="button-text">Original Dataset</Link> : '' }
            </div> :
            <div className="right-menu">
              Created by {this.props.users[chart.author_id].username}
            </div>
          }
          <Modal show={this.state.showNewPost} onClose={this.toggleNewPost}>
            <NewPost><Chart chart={chart} width={370} height={150} /></NewPost>
          </Modal>
        </div>
      );
    }
    return (<div />);
  }
};

ChartShowMenu.propTypes = {
  chart: PropTypes.objectOf(Object),
};

ChartShowMenu.defaultProps = {
  chart: undefined,
};

export default ChartShowMenu;
