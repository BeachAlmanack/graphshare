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
