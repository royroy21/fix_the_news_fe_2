import {
  POST_NEWS_ITEM_BEGIN,
  POST_NEWS_ITEM_SUCCESS,
  POST_NEWS_ITEM_ERROR,
  CLEAR_NEWS_ITEM,
} from './../actions/newsItem';

const initialState = {
  object: null,
  loading: false,
  error: null,
};

const newsItemReducer = (state = initialState, action) => {
  switch(action.type) {
    case POST_NEWS_ITEM_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case POST_NEWS_ITEM_SUCCESS:
        return {
        ...state,
        loading: false,
        object: action.payload.data,
      };
    case POST_NEWS_ITEM_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        object: null,
      };
    case CLEAR_NEWS_ITEM:
      return {
        object: null,
        loading: false,
        error: null,
      };
    default:
      return state
  }
};

export default newsItemReducer;
