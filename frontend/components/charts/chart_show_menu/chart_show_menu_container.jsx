import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ChartMenu from './chart_show_menu';

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

export default withRouter(connect(mapStateToProps)(ChartMenu));
