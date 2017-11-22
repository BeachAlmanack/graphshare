import { connect } from 'react-redux';
import Dataset from './dataset';

const mapStateToProps = state => ({
  dataset: state.entities.datasets['new'],
});

export default connect(mapStateToProps)(Dataset);
