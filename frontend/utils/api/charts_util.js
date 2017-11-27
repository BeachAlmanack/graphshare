export const postChart = chart => (
  $.ajax({
    url: '/api/charts',
    method: 'POST',
    data: { chart },
  })
);
