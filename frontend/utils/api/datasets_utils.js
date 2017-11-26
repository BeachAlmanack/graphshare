export const postDataset = dataset => (
  $.ajax({
    url: '/api/datasets',
    method: 'POST',
    data: { dataset },
  })
);

export const getDatasets = author_id => (
  $.ajax({
    url: '/api/datasets',
    method: 'GET',
    data: { author_id },
  })
);

export const getDataset = id => (
  $.ajax({
    url: `/api/datasets/${id}`,
    method: 'GET',
  })
);

export const deleteDataset = id => (
  $.ajax({
    url: `/api/datasets/${id}`,
    method: 'DELETE',
  })
);
