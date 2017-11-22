export const postDataset = (dataset) => {
  return $.ajax({
    url: '/api/datasets',
    method: 'POST',
    data: { dataset },
  });
};
