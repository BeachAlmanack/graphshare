import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

class Dataset extends React.Component {
  componentDidMount() {
    if (this.props.datasetId !== 'new') {
      this.props.fetchDataset(this.props.datasetId);
    }
  }
  render() {
    if (this.props.dataset && this.props.dataset.rows) {
      let columnNames = [];
      let dataTypes = [];
      let rows = [];
      let rowIds = [];
      const jsonData = JSON.stringify(this.props.dataset);
      
      function download(text, name, type) {
        var a = document.createElement("a");
        var file = new Blob([text], { type: type });
        a.href = URL.createObjectURL(file);
        a.download = name;
        a.click();
      }
      // download(jsonData, 'test.txt', 'text/plain');

      columnNames = _.keys(this.props.dataset.header);
      dataTypes = _.values(this.props.dataset.header);
      rows = _.values(this.props.dataset.rows);
      rowIds = _.keys(this.props.dataset.rows);

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
                {dataTypes.map((dataType, idx) => <td key={columnNames[idx]} className={`datatype-${dataType.replace(/\(.*?\)/, '')}`}>{dataType}</td>)}
              </tr>
              {
                rows.map((row, idx) => (
                  <tr key={rowIds[idx]}>
                    { columnNames.map(cName => <td key={cName}>{row[cName]}</td>)}
                  </tr>
                ))
              }
            </tbody>
          </table >
        </div>
      );
    }
    return (
      <div className="spinner">
        <div className="rect1" />
        <div className="rect2" />
        <div className="rect3" />
        <div className="rect4" />
        <div className="rect5" />
      </div>
    );
  }
}

Dataset.propTypes = {
  dataset: PropTypes.objectOf(Object),
  datasetId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  fetchDataset: PropTypes.func.isRequired,
};

Dataset.defaultProps = {
  dataset: undefined,
};

export default Dataset;
