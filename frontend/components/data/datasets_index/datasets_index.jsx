import React from 'react';

class DatasetsIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchDatasets(this.props.userId);
  }

  render() {

    const test = JSON.stringify(this.props.datasets);
    return (
      <div>
        {test}
      </div>
    );
  }
}

export default DatasetsIndex;
