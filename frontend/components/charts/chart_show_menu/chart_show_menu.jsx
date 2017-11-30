import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Modal from '../../util/modal';
import NewPostContainer from '../../posts/new_post_container';
import Chart from '../chart';

class ChartShowMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = { showNewPost: false };
    this.toggleNewPost = this.toggleNewPost.bind(this);
  }

  toggleNewPost() {
    this.setState({
      showNewPost: !this.state.showNewPost,
    });
  }

  render() {
    const { chart, userId } = this.props;
    if (chart) {
      return (
        <div className="menu-bar">
          <div className="top-menu">
            <h1>{chart.title}</h1>
            <div>
              <p> <i className="fa fa-pencil-square-o" aria-hidden="true" />
                {chart.post_count || 0} Post{chart.post_count > 1 ? 's' : ''} | <i className="fa fa-heart" aria-hidden="true" />
                {chart.like_count || 0} Like{chart.like_count > 1 ? 's' : ''} </p>
            </div>
          </div>
          {userId === chart.author_id ?
            <div className="bottom-menu">
              <p />
              <div>
              <button onClick={this.toggleNewPost} className="button-text">Post</button>
              <Link to={`/charts/`} className="button-text">My Charts</Link>
              { chart.dataset_id ? <Link to={`/datasets/${chart.dataset_id}`} className="button-text">Original Dataset</Link> : '' }
              </div>
            </div> :
            <div className="bottom-menu">
              Created by {this.props.users[chart.author_id].username}
            </div>
          }
          <Modal show={this.state.showNewPost} onClose={this.toggleNewPost}>
            <NewPostContainer contentType='Chart' contentId={chart.id}>
              <Chart chart={chart} width={370} height={150} />
            </NewPostContainer>
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
