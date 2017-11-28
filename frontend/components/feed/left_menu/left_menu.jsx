import React from 'react';
import LeftMenuDatasetsContainer from './left_menu_datasets_container';
import LeftMenuChartsContainer from './left_menu_charts_container';

export default function LeftMenu() {
  return (
    <div className="left-feed-menu">
      <LeftMenuDatasetsContainer />
      <LeftMenuChartsContainer />
    </div>
  );
}
