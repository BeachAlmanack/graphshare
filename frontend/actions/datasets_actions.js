export const RECEIVE_DATASET = 'RECEIVE_DATASET';

export const receiveDataset = (dataset) => ({
  type: RECEIVE_DATASET,
  dataset,
});
