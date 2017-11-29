import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { removeDataset } from '../../../actions/datasets_actions';
import DatasetMenu from './data_show_menu';

const mapStateToProps = (state, ownProps) => {
  const dataset = state.entities.datasets[ownProps.match.params.id];
  const userId = state.session.currentUser.id;
  const users = state.entities.users;
  return {
    dataset,
    userId,
    users,
  };
};

const mapDispatchToProps = dispatch => ({
  deleteDataset: id => dispatch(removeDataset(id)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DatasetMenu));
