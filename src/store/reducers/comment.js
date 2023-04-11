import {
  POST_COMMENT_BEGIN,
  POST_COMMENT_SUCCESS,
  POST_COMMENT_ERROR,
  CLEAR_COMMENT,
} from './../actions/comment';

const initialState = {
  object: null,
  loading: false,
  error: null,
};

const commentReducer = (state = initialState, action) => {
  switch(action.type) {
    case POST_COMMENT_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case POST_COMMENT_SUCCESS:
        return {
        ...state,
        loading: false,
        object: action.payload.data,
      };
    case POST_COMMENT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        object: null,
      };
    case CLEAR_COMMENT:
      return {
        object: null,
        loading: false,
        error: null,
      };
    default:
      return state
  }
};

export default commentReducer;
