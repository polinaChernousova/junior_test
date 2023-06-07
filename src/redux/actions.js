import {
  FETCH_COMMENTS_FAILURE,
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
  FETCH_ONE_POST_FAILURE,
  FETCH_ONE_POST_REQUEST,
  FETCH_ONE_POST_SUCCESS,
  FETCH_ONE_USER_FAILURE,
  FETCH_ONE_USER_REQUEST,
  FETCH_ONE_USER_SUCCESS,
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  SET_PAGE,
  SET_PAGE_SIZE,
  SET_TOTAL_POSTS,
  SORT_POSTS_BY_TITLE,
} from "../utils/consts";

export const fetchPostsRequest = (page, pageSize) => ({
  type: FETCH_POSTS_REQUEST,
  payload: { page, pageSize },
});

export const fetchPostsSuccess = (posts) => ({
  type: FETCH_POSTS_SUCCESS,
  payload: posts,
});

export const fetchPostsFailure = (error) => ({
  type: FETCH_POSTS_FAILURE,
  payload: error,
});

// !  комментарии

export const fetchCommentsRequest = () => ({
  type: FETCH_COMMENTS_REQUEST,
});

export const fetchCommentsSuccess = (comments) => ({
  type: FETCH_COMMENTS_SUCCESS,
  payload: comments,
});

export const fetchCommentsFailure = (error) => ({
  type: FETCH_COMMENTS_FAILURE,
  payload: error,
});

// ! pagination
export const setPage = (page) => ({
  type: SET_PAGE,
  payload: page,
});

export const setPageSize = (pageSize) => ({
  type: SET_PAGE_SIZE,
  payload: pageSize,
});

export const setTotalPosts = (totalPosts) => ({
  type: SET_TOTAL_POSTS,
  payload: totalPosts,
});

// ! sort
export const sortPostsByTitle = () => ({
  type: SORT_POSTS_BY_TITLE,
});

// ! onePOst
export const fetchOnePostRequest = (userId) => ({
  type: FETCH_ONE_POST_REQUEST,
  payload: { userId },
});

export const fetchOnePostSuccess = (onePost) => ({
  type: FETCH_ONE_POST_SUCCESS,
  payload: onePost,
});

export const fetchOnePostFailure = (error) => ({
  type: FETCH_ONE_POST_FAILURE,
  payload: error,
});

// ! user
export const fetchOneUserRequest = (id) => ({
  type: FETCH_ONE_USER_REQUEST,
  payload: id,
});

export const fetchOneUserSuccess = (data) => ({
  type: FETCH_ONE_USER_SUCCESS,
  payload: data,
});

export const fetchOneUserFailure = (error) => ({
  type: FETCH_ONE_USER_FAILURE,
  payload: error,
});
