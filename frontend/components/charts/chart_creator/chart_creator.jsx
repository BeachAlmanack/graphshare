import React from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import Select from 'react-select';
import { DragDropContext } from 'react-dnd';
import ColumnName from './column_name';
import DropAxis from './drop_axis';

class ChartCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenDataset: '',
      xAxis: [],
      yAxis: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
  }

  componentDidMount() {
    this.props.fetchDatasets(this.props.currentUserId);
  }

  handleDrop(bin, item) {
    this.setState((prevState) => {
      return {
        [bin]: prevState[bin].concat([item]),
      };
    });
  }

  handleChange(chosenDataset) {
    this.setState({ 
      chosenDataset,
      xAxis: [],
      yAxis: [],
    });
    if (chosenDataset && !this.props.datasets[chosenDataset.value].rows) {
      this.props.fetchDataset(chosenDataset.value);
    }
  }
  
  render() {
    const { datasets } = this.props;
    const ids = Object.keys(datasets);
    const columnNames = this.state.chosenDataset ? Object.keys(datasets[this.state.chosenDataset.value].header) : [];
    const filteredCol = columnNames.filter(columnName => 
      this.state.xAxis.every(item => (item.name !== columnName)) && 
      this.state.yAxis.every(item => (item.name !== columnName))
    );
    const header = this.state.chosenDataset ? datasets[this.state.chosenDataset.value].header : [];
    const options = ids.map(id => ({ value: id, label: datasets[id].title }));
    const itemsX = this.state.xAxis;
    const itemsY = this.state.yAxis;
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
            {filteredCol.map(name => ColumnName(header[name], name)) }
          </ul>
        </div>
        <div className="dataset-drops">
          <div>
            <h2>X Axis</h2>
            { DropAxis('Numerical', itemsX, item => this.handleDrop('xAxis', item)) }
          </div>
          <div>
            <h2>Y Axis</h2>
            {DropAxis(['Date', 'Numerical', 'Categorical'], itemsY, item => this.handleDrop('yAxis', item))}
          </div>
        </div>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(ChartCreator);
