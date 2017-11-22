export const postDataset = (dataset) => {
  return $.ajax({
    url: '/api/users',
    method: 'POST',
    data: { 
      dataset
     },
  });
};
