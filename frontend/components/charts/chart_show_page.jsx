import React from 'react';
import ChartContainer from './chart_container';
import ChartShowMenuContainer from './chart_show_menu/chart_show_menu_container';

export default function DataShowPage() {
  return (
    <div className="chart-show">
      <ChartShowMenuContainer />
      <ChartContainer />
    </div>
  );
}
