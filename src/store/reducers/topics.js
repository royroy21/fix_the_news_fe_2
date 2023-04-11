import {
  GET_TOPICS_BEGIN,
  GET_TOPICS_SUCCESS,
  GET_TOPICS_ERROR,
  REFRESH_TOPIC_BEGIN,
  REFRESH_TOPIC_SUCCESS,
  REFRESH_TOPIC_ERROR,
  CLEAR_TOPICS,
  PREPEND_TOPIC,
} from './../actions/topics';
import {combineLists, refreshItemInList} from "../../helpers/arrayFunctions";

const initialState = {
  objects: null,
  loading: false,
  error: null,
  items: [],
};

const topicsReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_TOPICS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_TOPICS_SUCCESS:
      return {
        objects: action.payload.data,
        loading: false,
        error: null,
        items: combineLists(
          state.items,
          action.payload.data.results,
        ),
      };
    case GET_TOPICS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case REFRESH_TOPIC_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case REFRESH_TOPIC_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        items: refreshItemInList(
          state.items,
          action.payload.data,
        ),
      };
    case REFRESH_TOPIC_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case PREPEND_TOPIC:
      if (action.topic) {
        if (state.items.length > 0 && state.items[0].id === action.topic.id) {
          // topic is already at the top
          return state;
        }
        return {
          ...state,
          items: [
            action.topic,
            ...state.items,
          ],
        };
      } else {
        return state;
      }
    case CLEAR_TOPICS:
      return {
        objects: null,
        loading: false,
        error: null,
        items: [],
      };
    default:
      return state
  }
};

export default topicsReducer;
