import React from 'react';
import _ from 'lodash';

class Dataset extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.datasetId !== 'new') {
      this.props.fetchDataset(this.props.datasetId);
    }
  }
  render() {
    let columnNames = [];
    let dataTypes = [];
    let rows = [];
    let rowIds = [];
    if (this.props.dataset) {
      columnNames = _.keys(this.props.dataset.header);
      dataTypes = _.values(this.props.dataset.header);
      rows = _.values(this.props.dataset.rows);
      rowIds = _.keys(this.props.dataset.rows);
    }
  
    return (
      <div className="dataset">
        <table>
          <thead>
            <tr>
              {columnNames.map(columnName => <th key={columnName}>{columnName}</th>)}
            </tr>
          </thead>
          <tbody>
            <tr>
              { dataTypes.map((dataType, idx) => <td key={columnNames[idx]} className={`datatype-${dataType}`}>{dataType}</td>) }
            </tr>
            { rows.map((row, idx) =>
              <tr key={rowIds[idx]}>{columnNames.map(cName => <td key={cName}>{row[cName]}</td>)}</tr>
            ) }
          </tbody>
        </table >
      </div>
    );
  }
}

export default Dataset;


// { this.props.header.map(header => <th>{header.name}</th>) }