import ChartFactory from './chart/chart_factory';

export default function Chart() {
  const exampleChart = {
    type: 'Line',
    data: {
      header: {
        'data1': 'Numerical',
        'Categorical Data': 'Categorical',
        'data2': 'Numerical',
      },
      axis: {
        x: 'data2',
        y: ['data1'],
      },
      rows: {
        0: {
          'data1': 12.45,
          'Categorical Data': 'CONST',
          'data2': 11,
        },
        1: {
          'data1': 15.45,
          'Categorical Data': 'CONST2',
          'data2': 12,
        },
        2: {
          'data1': 11.45,
          'Categorical Data': 'CONST3',
          'data2': 13,
        },
        3: {
          'data1': 15,
          'Categorical Data': 'CONST4',
          'data2': 14,
        },
        4: {
          'data1': 11,
          'Categorical Data': 'CONST5',
          'data2': 18,
        },
      },
    },
  };

  return (
    ChartFactory.build(exampleChart)
  );
}

