import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  fetchCommentsFailure,
  fetchCommentsSuccess,
  fetchPostsFailure,
  fetchPostsSuccess,
  setTotalPosts,
} from "./actions";
import { fetchCommentsAPI, fetchPostsAPI } from "./api";
import { FETCH_COMMENTS_REQUEST, FETCH_POSTS_REQUEST } from "../utils/consts";

export function* fetchPostsSaga({ payload }) {
  try {
    const { data, totalPosts } = yield call(fetchPostsAPI, payload);
    yield put(fetchPostsSuccess(data));
    yield put(setTotalPosts(totalPosts));
  } catch (error) {
    yield put(fetchPostsFailure(error.message));
  }
}

function* fetchCommentsSaga() {
  try {
    const comments = yield call(fetchCommentsAPI);

    yield put(fetchCommentsSuccess(comments));
  } catch (error) {
    yield put(fetchCommentsFailure(error.message));
  }
}

export default function* rootSaga() {
  yield takeEvery(FETCH_POSTS_REQUEST, fetchPostsSaga);

  yield all([FETCH_COMMENTS_REQUEST, fetchCommentsSaga()]);
}
