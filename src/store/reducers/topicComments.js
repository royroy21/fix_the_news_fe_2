import {
  GET_TOPIC_COMMENTS_BEGIN,
  GET_TOPIC_COMMENTS_SUCCESS,
  GET_TOPIC_COMMENTS_ERROR,
  CLEAR_TOPIC_COMMENTS,
} from './../actions/topicComments';
import {combineLists} from "../../helpers/arrayFunctions";

export const initialTopicCommentsState = {
  objects: null,
  loading: false,
  error: null,
  items: [],
};

const topicCommentsReducer = (state = {}, action) => {
  const getTopicComments = (action, state) => {
    return state[action.params.topic] || initialTopicCommentsState;
  };
  switch(action.type) {
    case GET_TOPIC_COMMENTS_BEGIN:
      return {
        ...state,
        [action.params.topic]: {
          ...getTopicComments(action, state),
          loading: true,
          error: null,
        },
      };
    case GET_TOPIC_COMMENTS_SUCCESS:
      return {
        ...state,
        [action.params.topic]: {
          objects: action.payload.data,
          loading: false,
          error: null,
          items: combineLists(
            getTopicComments(action, state).items,
            action.payload.data.results,
          ),
        },
      };
    case CLEAR_TOPIC_COMMENTS:
      return {
        ...state,
        [action.params.topic]: initialTopicCommentsState,
      };
    case GET_TOPIC_COMMENTS_ERROR:
      return {
        ...state,
        [action.params.topic]: {
          ...getTopicComments(action, state),
          loading: false,
          error: action.payload.error,
        },
      };
    default:
      return state
  }
};

export default topicCommentsReducer;
