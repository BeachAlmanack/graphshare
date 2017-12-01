import { connect } from 'react-redux';
import Signup from './signup';
import { createUser, login } from '../../actions/session_actions';
import { clearErrors } from '../../actions/errors_actions';

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(createUser(user)),
  login: user => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors()),
});

const mapStateToProps = state => ({
  errors: state.errors.session,
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
