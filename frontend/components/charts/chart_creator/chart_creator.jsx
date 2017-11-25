import React from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import Select from 'react-select';
import { DragDropContext } from 'react-dnd';
import ColumnName from './column_name';

class ChartCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenDataset: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchDatasets(this.props.currentUserId);
  }

  handleChange(chosenDataset) {
    this.setState({ chosenDataset });
    if (chosenDataset && !this.props.datasets[chosenDataset.value].rows) {
      this.props.fetchDataset(chosenDataset.value);
    }
  }
  
  render() {
    const { datasets } = this.props;
    const ids = Object.keys(datasets);
    const columnNames = this.state.chosenDataset ? Object.keys(datasets[this.state.chosenDataset.value].header) : [];
    const header = this.state.chosenDataset ? datasets[this.state.chosenDataset.value].header : [];
    const options = ids.map(id => ({ value: id, label: datasets[id].title }));
    return (
      <div className="chart-creator-menu">
        <div className="dataset-chooser">
          <h2>Choose dataset: </h2>
          <Select
            value={this.state.chosenDataset}
            onChange={this.handleChange}
            options={options}
          />
          <h2>Columns: </h2>
          <ul className="column-names">
            {columnNames.map(name => <ColumnName key={name} name={name} type={header[name]} />) }
          </ul>
        </div>
        <div className="dataset-chooser">
          <div>
            <h2>X Axis</h2>
          </div>
          <div>
            <h2>Y Axis</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(ChartCreator);
