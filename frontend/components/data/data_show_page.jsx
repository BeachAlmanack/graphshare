import React from 'react';
import DatasetContainer from './dataset/dataset_container';
import DataShowMenuContainer from './data_show_menu/data_show_menu_container';

export default function DataShowPage() {
  return (
    <div>
      <DataShowMenuContainer />
      <DatasetContainer />
    </div>
  );
}
