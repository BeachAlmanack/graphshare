import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DataImport from './data_import';
import { receiveDataset, updateDatasetTitle, saveDataset } from '../../../actions/datasets_actions';


const mapDispatchToProps = dispatch => ({
  receiveDataset: dataset => dispatch(receiveDataset(dataset)),
  updateDatasetTitle: (id, title) => dispatch(updateDatasetTitle(id, title)),
  saveDataset: id => dispatch(saveDataset(id)),
});

const mapStateToProps = (state) => {
  let dataset = {
    id: 'new',
    title: '',
    header: {},
    rows: {},
    file_name: '',
  };
  if (state.entities.datasets.new) {
    dataset = state.entities.datasets.new;
  }
  return {
    dataset,
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DataImport));
