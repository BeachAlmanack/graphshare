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
