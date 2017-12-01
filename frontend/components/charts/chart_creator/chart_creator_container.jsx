import { connect } from 'react-redux';
import { omitBy } from 'lodash';
import { withRouter } from 'react-router-dom';
import ChartCreator from './chart_creator';
import { fetchDataset, fetchDatasets } from '../../../actions/datasets_actions';
import { receiveChart, saveChart } from '../../../actions/chart_actions';

const mapStateToProps = (state, ownProps) => (
  {
    datasets: omitBy(state.entities.datasets, d => d.author_id !== state.session.currentUser.id),
    currentUserId: state.session.currentUser.id,
    selectedDataset: ownProps.match.params.dataId,
  });

const mapDispatchToProps = dispatch => ({
  fetchDatasets: userId => dispatch(fetchDatasets(userId)),
  fetchDataset: id => dispatch(fetchDataset(id)),
  receiveChart: chart => dispatch(receiveChart({ chart })),
  saveChart: chart => dispatch(saveChart(chart)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChartCreator));
