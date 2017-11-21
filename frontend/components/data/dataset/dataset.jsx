import React from 'react';
import _ from 'lodash';

class Dataset extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.dataset);
  }
  render() {
    let columnNames = [];
    let dataTypes = [];
    let rows = [];
    if(this.props.dataset) {
      columnNames = _.keys(this.props.dataset.header);
      dataTypes = _.values(this.props.dataset.header);
      rows = _.values(this.props.dataset.rows);
    }
  
    return (
      <div className="dataset">
        <table>
          <thead>
            <tr>
              {columnNames.map(columnName => <th>{columnName}</th>)}
            </tr>
          </thead>
          <tbody>
            <tr>
              { dataTypes.map(dataType => <td>{dataType}</td>) }
            </tr>
            { rows.map(row =>
              <tr>{columnNames.map(cName => <td>{row[cName]}</td>)}</tr>
            ) }
          </tbody>
        </table >
      </div>
    );
  }
}

export default Dataset;


// { this.props.header.map(header => <th>{header.name}</th>) }