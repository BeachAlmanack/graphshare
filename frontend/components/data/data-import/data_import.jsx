import React from 'react';
import Dropzone from 'react-dropzone';

class DataImport extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      data: {},
    };

    this.handleTitle = this.handleTitle.bind(this);
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
            accept="text/csv, text/tab-separated-values, application/json"
          >
            {<i className="fa fa-upload fa-3x" aria-hidden="true" />}
          </Dropzone>
        </label>
        <div className="data-right">
        <label htmlFor="data-name" className="data-title-label"> Data Title:
          <input 
            type="text"
            id="data-name"
            value={this.state.title}
            onChange={this.handleTitle}
            placeholder="Title"
          />
        </label>
        <button className="data-save">Save</button>
        </div>
      </div>
    );
  }
}

export default DataImport;
