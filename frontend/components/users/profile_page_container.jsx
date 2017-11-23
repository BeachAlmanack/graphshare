import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchUser } from '../../actions/session_actions';
import ProfilePage from './profile_page';

const mapStateToProps = (state, ownProps) => {
  const userId = ownProps.match.params.id;
  const user = state.entities.users[ownProps.match.params.id];
  return {
    userId,
    user,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfilePage));
