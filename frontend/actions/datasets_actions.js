import { postDataset, getDatasets, getDataset, deleteDataset } from '../utils/api/datasets_util';
import { receiveErrors } from './errors_actions';

export const RECEIVE_DATASET = 'RECEIVE_DATASET';
export const RECEIVE_DATASETS = 'RECEIVE_DATASETS';
export const RECEIVE_DATASET_TITLE = 'RECEIVE_DATASET_TITLE';
export const CLEAR_NEW_DATASET = 'CLEAR_NEW_DATASET';

export const receiveDataset = payload => ({
  type: RECEIVE_DATASET,
  dataset: payload.dataset,
  user: payload.user,
});

export const receiveDatasets = payload => ({
  type: RECEIVE_DATASETS,
  datasets: payload.datasets,
  users: payload.users,
});

export const updateDatasetTitle = (id, title) => ({
  type: RECEIVE_DATASET_TITLE,
  title,
  id,
});

export const clearNewDataset = () => ({
  type: CLEAR_NEW_DATASET,
});

export const saveDataset = id => (dispatch, getState) => {
  const dataset = getState().entities.datasets[id];
  dataset.author_id = getState().session.currentUser.id;
  if (id === 'new') {
    delete dataset.id;
  }
  return postDataset(dataset)
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
    .then(payload => dispatch(receiveDataset(payload)))
    .then(() => dispatch(clearNewDataset()));
};

export const fetchDatasets = authorId => (dispatch) => {
  return getDatasets(authorId)
    .then(payload => dispatch(receiveDatasets(payload)));
};

export const fetchDataset = id => (dispatch) => {
  return getDataset(id)
    .then(payload => dispatch(receiveDataset(payload)));
};

export const removeDataset = id => (dispatch) => {
  return deleteDataset(id);
};