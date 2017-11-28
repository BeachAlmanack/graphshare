export const postChart = chart => (
  $.ajax({
    url: '/api/charts',
    method: 'POST',
    data: { chart },
  })
);

export const getChart = id => (
  $.ajax({
    url: `/api/charts/${id}`,
    method: 'GET',
  })
);

export const getCharts = author_id => (
  $.ajax({
    url: '/api/charts/',
    method: 'GET',
    data: { author_id },
  })
);
