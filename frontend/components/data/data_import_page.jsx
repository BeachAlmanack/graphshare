import React from 'react';
import DataImportContainer from './data_import/data_import_container';
import DatasetContainer from './dataset/dataset_container';

export default function DataImportPage() {
  return (
    <div>
      <DataImportContainer />
      <DatasetContainer />
    </div>
  );
}
