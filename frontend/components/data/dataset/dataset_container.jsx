import { connect } from 'react-redux';
import Dataset from './dataset';

const mapStateToProps = state => ({
  dataset: state.entities.datasets[1],
});

export default connect(mapStateToProps)(Dataset);
