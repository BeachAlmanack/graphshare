import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ChartMenu from './chart_show_menu';
import { savePost } from '../../../actions/post_actions';

const mapStateToProps = (state, ownProps) => {
  const chart = state.entities.charts[ownProps.match.params.id];
  const userId = state.session.currentUser.id;
  const users = state.entities.users;
  return {
    chart,
    userId,
    users,
  };
};

const mapDispatchToProps = dispatch => ({
  savePost: post => dispatch(savePost(post)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChartMenu));
