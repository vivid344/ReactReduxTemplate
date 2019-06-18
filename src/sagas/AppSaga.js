import { call, put, takeEvery } from 'redux-saga/effects';
import { sagaRequest, sagaSuccess, sagaFailed } from '../actions/App'
import { sagaApi } from '../apis/App';

function* sagaTemplate(action) {
  yield put(sagaRequest());
  const { body, error } = yield call(sagaApi, action.text);
  if (error) {
    yield put(sagaFailed());
  } else {
    yield put(sagaSuccess(body));
  }
}

const saga = [
  takeEvery('CHANGE_INPUT', sagaTemplate)
];

export default saga;
