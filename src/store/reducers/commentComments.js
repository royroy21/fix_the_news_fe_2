import {
  GET_COMMENT_COMMENTS_BEGIN,
  GET_COMMENT_COMMENTS_SUCCESS,
  GET_COMMENT_COMMENTS_ERROR,
  CLEAR_COMMENT_COMMENTS,
} from './../actions/commentComments';
import {combineLists} from "../../helpers/arrayFunctions";

export const initialCommentCommentsState = {
  objects: null,
  loading: false,
  error: null,
  items: [],
};

const commentCommentsReducer = (state = {}, action) => {
  const getCommentComments = (action, state) => {
    return state[action.params.comment] || initialCommentCommentsState;
  };
  switch(action.type) {
    case GET_COMMENT_COMMENTS_BEGIN:
      return {
        ...state,
        [action.params.comment]: {
          ...getCommentComments(action, state),
          loading: true,
          error: null,
        },
      };
    case GET_COMMENT_COMMENTS_SUCCESS:
      return {
        ...state,
        [action.params.comment]: {
          objects: action.payload.data,
          loading: false,
          error: null,
          items: combineLists(
            getCommentComments(action, state).items,
            action.payload.data.results,
          ),
        },
      };
    case CLEAR_COMMENT_COMMENTS:
      return {
        ...state,
        [action.params.comment]: initialCommentCommentsState,
      };
    case GET_COMMENT_COMMENTS_ERROR:
      return {
        ...state,
        [action.params.comment]: {
          ...getCommentComments(action, state),
          loading: false,
          error: action.payload.error,
        },
      };
    default:
      return state
  }
};

export default commentCommentsReducer;
