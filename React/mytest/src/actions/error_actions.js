import { ADD_ERROR, CLEAR_ERRORS } from './types';

export const addErrorMessage = e => {
  const error = e;

  return { type: ADD_ERROR, payload: error };
};

export const clearErrorMessages = error => {
  return { type: CLEAR_ERRORS };
};
