export const changeInput = (text) => {
  return {
    type: 'CHANGE_INPUT',
    text,
  }
};

export const sagaRequest = () => {
  return {
    type: 'SAGA_REQUEST',
  }
};

export const sagaSuccess = (text) => {
  return {
    type: 'SAGA_SUCCESS',
    text
  }
};

export const sagaFailed = () => {
  return {
    type: 'SAGA_FAILED',
  }
};
