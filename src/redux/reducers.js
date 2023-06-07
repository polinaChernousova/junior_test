import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,
  SET_PAGE,
  SET_PAGE_SIZE,
  SET_TOTAL_POSTS,
  SORT_POSTS_BY_TITLE,
  FETCH_ONE_POST_FAILURE,
  FETCH_ONE_POST_SUCCESS,
  FETCH_ONE_USER_SUCCESS,
  FETCH_ONE_USER_FAILURE,
  FETCH_ONE_POST_REQUEST,
  FETCH_ONE_USER_REQUEST,
} from "../utils/consts";
import { initialState } from "../utils/initState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
    case FETCH_COMMENTS_REQUEST:
    case FETCH_ONE_POST_REQUEST:
    case FETCH_ONE_USER_REQUEST:
      return { ...state, loading: true, error: null };

    case FETCH_POSTS_SUCCESS:
      return { ...state, loading: false, posts: action.payload };
    case FETCH_COMMENTS_SUCCESS:
      return { ...state, loading: false, comments: action.payload };
    case FETCH_ONE_POST_SUCCESS:
      return { ...state, loading: false, onePost: action.payload };
    case FETCH_ONE_USER_SUCCESS:
      return { ...state, loading: false, oneUser: action.payload };

    case FETCH_POSTS_FAILURE:
    case FETCH_COMMENTS_FAILURE:
    case FETCH_ONE_POST_FAILURE:
    case FETCH_ONE_USER_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case SET_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    case SET_PAGE_SIZE:
      return {
        ...state,
        pageSize: action.payload,
      };
    case SET_TOTAL_POSTS:
      return {
        ...state,
        totalPosts: action.payload,
      };

    case SORT_POSTS_BY_TITLE:
      const sortedPosts = [...state.posts].sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      return {
        ...state,
        posts: sortedPosts,
        isSorted: true,
      };

    default:
      return state;
  }
};

export default reducer;
