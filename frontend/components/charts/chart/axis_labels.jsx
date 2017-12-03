import React from 'react';

export default function ({leftAxis, bottomAxis, width, height}) {
  const xAxisText = (
    <text
      x={width / 2}
      y={height + 5}
      textAnchor="middle"
    >
      {bottomAxis}
    </text>
  );
  const yAxisText = (
    <text
      x="0"
      y="0"
      transform={`translate(15, ${(height / 2)}), rotate(-90)`}
      textAnchor="middle"
    >
      {leftAxis}
    </text>
  );

  return (
    <g>
      { xAxisText }
      { yAxisText }
    </g>
  );
}
