import React from 'react';
import ChartCreatorContainer from './chart_creator/chart_creator_container';
import ChartContainer from './chart_container';

export default function DataImportPage() {
  return (
    <div className="chart-creator">
      <ChartCreatorContainer />
      <ChartContainer />
    </div>
  );
}