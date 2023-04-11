export const UPDATE_DIMENSIONS = 'POST_DIMENSIONS';

export const updateDimensions = data => ({
  type: UPDATE_DIMENSIONS,
  payload: { data },
});
