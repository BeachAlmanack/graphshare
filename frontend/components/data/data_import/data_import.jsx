import React from 'react';
import Dropzone from 'react-dropzone';
import { csvData } from '../../../utils/data/file_import_util';
import { formatData } from '../../../utils/data/data_analyzer_util';

const ACCEPTED_TYPES = ['text/csv', ' text/tab-separated-values', 'application/json'];

class DataImport extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      fileName: '',
      error: '',
    };

    this.handleTitle = this.handleTitle.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.processData = this.processData.bind(this);
  }

  onDrop(acceptedFiles, rejectedFiles) {
    let error = '';
    const files = acceptedFiles.concat(rejectedFiles);
    if ((files.length) === 1) {
      if (ACCEPTED_TYPES.includes(files[0].type)) {
        this.setState({
          fileName: files[0].name,
        });
        error = '';
        csvData(window.URL.createObjectURL(files[0]), this.processData);
      } else {
        error = `${files[0].name} is not a valid file`;
      }
    } else {
      error = 'You can only upload one file at a time';
    }
    this.setState({
      error,
    });
  }

  processData(data) {
    const dataWithType = formatData(data);
    this.props.receiveDataset(dataWithType);
    console.log(JSON.stringify(dataWithType));
  }

  handleTitle(event) {
    this.setState({
      title: event.target.value,
    });
  }

  render() {
    return (
      <div className="data-import">
        
        <label htmlFor="drop-zone"> File Upload:
          <Dropzone
            className="drop-zone"
            onDrop={this.onDrop}
            accept={ACCEPTED_TYPES.join(' ')}
          >
            {<i className="fa fa-upload fa-3x" aria-hidden="true" />}
          </Dropzone>
        </label>
        <div className="data-right">
        <label htmlFor="data-name" className="data-title-label"> Dataset Title:
          <input 
            type="text"
            id="data-name"
            value={this.state.title}
            onChange={this.handleTitle}
            placeholder="Title"
          />
        </label>
          { this.state.fileName ?
            <div>
            <label> Current File: </label>
              <span className="data-import-message">  {this.state.fileName}</span> </div> : ''
          }
          { this.state.error ?
            <div>
              <label> Error: </label>
              <span className="data-import-message error"> {this.state.error} </span>
            </div> : ''
          }
          <button className="data-save" onClick={this.saveDataset}>Save</button>
        </div>
      </div>
    );
  }
}

export default DataImport;
