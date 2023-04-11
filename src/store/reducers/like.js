import {
  POST_LIKE_BEGIN,
  POST_LIKE_SUCCESS,
  POST_LIKE_ERROR,
  DELETE_LIKE_BEGIN,
  DELETE_LIKE_SUCCESS,
  DELETE_LIKE_ERROR,
  CLEAR_LIKE,
} from './../actions/like';

const initialState = {
  object: null,
  loading: false,
  error: null,
};

const likeReducer = (state = initialState, action) => {
  switch(action.type) {
    case POST_LIKE_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case POST_LIKE_SUCCESS:
        return {
        ...state,
        loading: false,
        object: action.payload.data,
      };
    case POST_LIKE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        object: null,
      };
    case DELETE_LIKE_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case DELETE_LIKE_SUCCESS:
        return {
        ...initialState,
      };
    case DELETE_LIKE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        object: null,
      };
    case CLEAR_LIKE:
      return {
        object: null,
        loading: false,
        error: null,
      };
    default:
      return state
  }
};

export default likeReducer;
