export const postDataset = (dataset) => {
  return $.ajax({
    url: '/api/datasets',
    method: 'POST',
    data: { dataset },
  });
};

export const getDatasets = (author_id) => {
  return $.ajax({
    url: '/api/datasets',
    method: 'GET',
    data: { author_id },
  });
};

export const getDataset = (id) => {
  return $.ajax({
    url: `/api/datasets/${id}`,
    method: 'GET',
  });
};

export const deleteDataset = (id) => {
  return $.ajax({
    url: `/api/datasets/${id}`,
    method: 'DELETE',
  });
};
