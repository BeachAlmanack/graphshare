import React from 'react';
import ChartCreatorContainer from './chart_creator/chart_creator_container';
import Chart from './chart';

export default function DataImportPage() {
  return (
    <div className="chart-creator">
      <ChartCreatorContainer />
      <Chart />
    </div>
  );
}