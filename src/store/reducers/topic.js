import {
  GET_TOPIC_BEGIN,
  GET_TOPIC_SUCCESS,
  GET_TOPIC_ERROR,
  POST_TOPIC_BEGIN,
  POST_TOPIC_SUCCESS,
  POST_TOPIC_ERROR,
  CLEAR_TOPIC,
} from './../actions/topic';

const initialState = {
  object: null,
  loading: false,
  error: null,
};

const topicReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_TOPIC_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_TOPIC_SUCCESS:
        return {
        ...state,
        loading: false,
        object: action.payload.data,
      };
    case GET_TOPIC_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        object: null,
      };
    case POST_TOPIC_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case POST_TOPIC_SUCCESS:
        return {
        ...state,
        loading: false,
        object: action.payload.data,
      };
    case POST_TOPIC_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        object: null,
      };
    case CLEAR_TOPIC:
      return initialState;
    default:
      return state
  }
};

export default topicReducer;
