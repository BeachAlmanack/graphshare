import { connect } from 'react-redux';
import DataImport from './data_import';
import { receiveDataset } from '../../../actions/datasets_actions';

const mapDispatchToProps = dispatch => ({
  receiveDataset: dataset => dispatch(receiveDataset(dataset)),
});

const mapStateToProps = state => ({
  dataset: state.entities.datasets[1],
});

export default connect(mapStateToProps, mapDispatchToProps)(DataImport);
