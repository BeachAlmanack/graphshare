import React from 'react';
import ChartFactory from './chart/chart_factory';

export default function Chart({ chart, width, height }) {
  if (chart) {
    return (
      <div>
        {ChartFactory.build(chart, width, height)}

        {chart.data.axis.y.length > 1 ?
          <ul className="labels">
            {
              chart.data.axis.y.map((label, idx) => (
                <li key={label}>
                  <i className={`fa fa-square color-${idx}`} aria-hidden="true" />{label}
                </li>
              ))
            }
          </ul>
        : '' }
      </div>
    );
  }
  return (<div>loading</div>);
}
