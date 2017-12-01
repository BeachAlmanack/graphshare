import React from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import Select from 'react-select';
import { find } from 'lodash';
import { DragDropContext } from 'react-dnd';
import ColumnName from './column_name';
import DropAxis from './drop_axis';
import Chart from '../chart';
import * as DataType from '../../../utils/constants/data_types';
import * as ChartType from '../../../utils/constants/chart_types';

class ChartCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenDataset: '',
      xAxis: [],
      yAxis: [],
      title: '',
      xAxisName: '',
      yAxisName: '',
      chartType: ChartType.LINE,
      chart: undefined,
      errors: '',
      disableSave: false,
    };

    this.handleDatasetChange = this.handleDatasetChange.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
    this.handleChartType = this.handleChartType.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.updateChart = this.updateChart.bind(this);
    this.saveChart = this.saveChart.bind(this);
  }

  componentDidMount() {
    this.props.fetchDatasets(this.props.currentUserId).then((payload) => {
      if (this.props.selectedDataset) {
        this.handleDatasetChange({
          value: this.props.selectedDataset,
          label: find(payload.datasets, { id: parseInt(this.props.selectedDataset) }).title,
        });
      }
    });
  }

  handleChartType(type) {
    this.setState({
      chartType: type,
      xAxis: [],
      yAxis: [],
      chart: undefined,
    });
  }

  updateChart() {
    const dataset = this.props.datasets[this.state.chosenDataset.value];
    const chart =
      {
        id: 'new',
        title: this.state.title,
        chart_type: this.state.chartType,
        dataset_id: this.state.chosenDataset.value,
        data: {
          header: dataset.header,
          rows: dataset.rows,
          axisNames: {
            x: this.state.xAxisName,
            y: this.state.yAxisName,
          },
          axis: {
            x: this.state.xAxis[0].name,
            y: this.state.yAxis.map(column => column.name),
          },
        },
      };

    if (chart.data.axis.x && chart.data.axis.y.length > 0) {
      this.setState({
        chart,
        errors: '',
      });
    } else {
      this.setState({
        chart: undefined,
      });
    }
  }

  handleDrop(dropBin, item) {
    this.setState({
      [dropBin]: this.state[dropBin].concat([item]),
    });
    this.updateChart();
  }

  handleDatasetChange(chosenDataset) {
    this.setState({
      chosenDataset,
      xAxis: [],
      yAxis: [],
      chart: undefined,
      errors: '',
    });
    if (chosenDataset && !this.props.datasets[chosenDataset.value].rows) {
      this.props.fetchDataset(chosenDataset.value);
    }
  }

  handleInputChange(type) {
    return (event) => {
      this.setState({
        [type]: event.target.value,
      });
      setTimeout(() => {
        this.updateChart();
      }, 0);
    };
  }

  removeItem(bin) {
    return (itemName) => {
      this.setState({
        [bin]: this.state[bin].filter(item => item.name !== itemName),
      });
      setTimeout(() => {
        this.updateChart();
      }, 0);
    };
  }

  saveChart(event) {
    event.preventDefault();
    const errors = [];
    if (!this.state.chart) {
      errors.push('please create a chart first by dragging one column in the x axis and at least one column in the y axis');
    }
    if (!this.state.title) {
      errors.push('you need a title for your chart');
    }
    if (errors.length > 0) {
      errors[0] = errors[0].charAt(0).toUpperCase() + errors[0].slice(1);
      this.setState({
        errors: errors.join(' and '),
      });
      return;
    }
    this.setState({
      disableSave: true,
    });
    this.props.saveChart(this.state.chart).then(payload => this.props.history.push(`/charts/${payload.chart.id}`));
  }

  render() {
    const { datasets } = this.props;
    const ids = Object.keys(datasets);
    const columnNames = this.state.chosenDataset ? Object.keys(datasets[this.state.chosenDataset.value].header) : [];
    const filteredCol = columnNames.filter(columnName =>
      this.state.xAxis.every(item => (item.name !== columnName)) &&
      this.state.yAxis.every(item => (item.name !== columnName)));
    const header = this.state.chosenDataset ? datasets[this.state.chosenDataset.value].header : [];
    const options = ids.map(id => ({ value: id, label: datasets[id].title }));
    const itemsX = this.state.xAxis;
    const itemsY = this.state.yAxis;
    console.log(this.state.errors);
    return (
      <div className="chart-creator-menu">
        
        <div className="dataset-chooser">
          <h2>1. Choose chart type: </h2>
          <ul className="chart-type">
            {ChartType.ALL.map(type => (
              <li onClick={() => this.handleChartType(type)} key={type}>
                <i
                  className={`fa fa-${type}-chart fa-lg ${this.state.chartType === type ? 'active' : ''}`}
                  aria-hidden="true"
                />
              </li>
            ))}
          </ul>
          <h2>2. Choose dataset: </h2>
          <Select
            value={this.state.chosenDataset}
            onChange={this.handleDatasetChange}
            options={options}
          />
          <h2>3. Drag Columns in axes: </h2>
          <ul className="column-names">
            {filteredCol.map(name => ColumnName(header[name].replace(/\(.*?\)/, ''), name))}
          </ul>
        </div>
        <div className="dataset-drops">
          <div>
            <h2>X Axis</h2> <input type="text" placeholder="Axis Name" value={this.state.xAxisName} onChange={this.handleInputChange('xAxisName')} />
            {DropAxis(DataType.ALL, itemsX, item => this.handleDrop('xAxis', item), this.removeItem('xAxis'))}
          </div>
          <div>
            <h2>Y Axis</h2> <input type="text" placeholder="Axis Name" value={this.state.yAxisName} onChange={this.handleInputChange('yAxisName')} />
            {DropAxis(DataType.NUMERICAL, itemsY, item => this.handleDrop('yAxis', item), this.removeItem('yAxis'))}
          </div>
        </div>
        <div className="new-chart">
          <label htmlFor="title"> Title:
            <input id="title" type="text" value={this.state.title} onChange={this.handleInputChange('title')} placeholder="Chart Title" />
          </label>
          {this.state.chart ? <Chart chart={this.state.chart} height={300} /> : <div className="chart-container" style={{ height: 350 }}> <p className="chart-placeholder"> Chart </p> </div>}
          <p className="errors">{ this.state.errors }</p>
          {!this.state.disableSave ? <button onClick={this.saveChart} className="chart-save">Save </button> :
            <div className="loading-save">
              <div className="double-bounce1"></div>
              <div className="double-bounce2"></div>
            </div>}
          
        </div>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(ChartCreator);
