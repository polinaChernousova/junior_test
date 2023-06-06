import { all, call, put, takeEvery } from "redux-saga/effects";
import { fetchPostsFailure, fetchPostsSuccess } from "./actions";
import { fetchPostsAPI } from "./api";
import { FETCH_POSTS_REQUEST } from "../utils/consts";

export function* fetchPostsSaga() {
  try {
    const data = yield call(fetchPostsAPI);
    yield put(fetchPostsSuccess(data));
  } catch (error) {
    yield put(fetchPostsFailure(error.message));
  }
}

export default function* rootSaga() {
  yield takeEvery(FETCH_POSTS_REQUEST, fetchPostsSaga);
}
