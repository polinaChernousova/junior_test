import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,
} from "../utils/consts";
import { initialState } from "../utils/initState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
    case FETCH_COMMENTS_REQUEST:
      return { ...state, loading: true, error: null };

    case FETCH_POSTS_SUCCESS:
      return { ...state, loading: false, posts: action.payload };
    case FETCH_COMMENTS_SUCCESS:
      return { ...state, loading: false, comments: action.payload };

    case FETCH_POSTS_FAILURE:
    case FETCH_COMMENTS_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default reducer;
