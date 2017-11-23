import { connect } from 'react-redux';
import Login from './login';
import { login } from '../../actions/session_actions';
import { clearErrors } from '../../actions/errors_actions';

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors()),
});

const mapStateToProps = state => ({
  errors: state.errors.session,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
