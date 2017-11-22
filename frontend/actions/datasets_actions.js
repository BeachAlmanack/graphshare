import { postDataset } from '../utils/api/datasets_utils';
import { receiveErrors } from './errors_actions';

export const RECEIVE_DATASET = 'RECEIVE_DATASET';
export const RECEIVE_DATASET_TITLE = 'RECEIVE_DATASET_TITLE';

export const receiveDataset = dataset => ({
  type: RECEIVE_DATASET,
  dataset,
});

export const updateDatasetTitle = (id, title) => ({
  type: RECEIVE_DATASET_TITLE,
  title,
  id,
});

export const saveDataset = id => (dispatch, getState) => {
  const dataset = getState().entities.datasets[id];
  dataset.author_id = getState().session.currentUser.id;
  if (id === 'new') {
    delete dataset.id;
  }
  return postDataset(dataset).fail(errors => dispatch(receiveErrors(errors.responseJSON))).then(dataset => dispatch(receiveDataset(dataset)));
};
