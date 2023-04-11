import {
  GET_NEWS_ITEMS_BEGIN,
  GET_NEWS_ITEMS_SUCCESS,
  GET_NEWS_ITEMS_ERROR,
  REFRESH_NEWS_ITEMS_BEGIN,
  REFRESH_NEWS_ITEMS_SUCCESS,
  REFRESH_NEWS_ITEMS_ERROR,
  CLEAR_NEWS_ITEMS,
  PREPEND_NEWS_ITEMS,
} from '../actions/newsItems';
import {combineLists, refreshItemInList} from "../../helpers/arrayFunctions";

export const initialState = {
  objects: null,
  loading: false,
  error: null,
  items: [],
};

const newsItemsReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_NEWS_ITEMS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_NEWS_ITEMS_SUCCESS:
      return {
        objects: action.payload.data,
        loading: false,
        error: null,
        items: combineLists(
          state.items,
          action.payload.data.results,
        ),
      };
    case GET_NEWS_ITEMS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case REFRESH_NEWS_ITEMS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case REFRESH_NEWS_ITEMS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        items: refreshItemInList(
          state.items,
          action.payload.data,
        ),
      };
    case REFRESH_NEWS_ITEMS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case PREPEND_NEWS_ITEMS:
      if (action.news_item) {
        if (state.items.length > 0 && state.items[0].id === action.news_item.id) {
          // news_item is already at the top
          return state;
        }
        return {
          ...state,
          items: [
            action.news_item,
            ...state.items,
          ],
        };
      } else {
        return state;
      }
    case CLEAR_NEWS_ITEMS:
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

export default newsItemsReducer;
