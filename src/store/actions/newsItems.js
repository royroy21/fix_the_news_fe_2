import DispatchAPI from "../../api";
import {newsItemsURL} from "../../settings";

export const GET_NEWS_ITEMS_BEGIN   = 'GET_NEWS_ITEMS_BEGIN';
export const GET_NEWS_ITEMS_SUCCESS = 'GET_NEWS_ITEMS_SUCCESS';
export const GET_NEWS_ITEMS_ERROR = 'GET_NEWS_ITEMS_ERROR';
export const REFRESH_NEWS_ITEMS_BEGIN   = 'REFRESH_NEWS_ITEMS_BEGIN';
export const REFRESH_NEWS_ITEMS_SUCCESS = 'REFRESH_NEWS_ITEMS_SUCCESS';
export const REFRESH_NEWS_ITEMS_ERROR = 'REFRESH_NEWS_ITEMS_ERROR';
export const CLEAR_NEWS_ITEMS = 'CLEAR_NEWS_ITEMS';
export const PREPEND_NEWS_ITEMS = 'PREPEND_NEWS_ITEMS';

export const getNewsItemsBegin = data => ({
  type: GET_NEWS_ITEMS_BEGIN,
  payload: { data },
});

export const getNewsItemsSuccess = data => ({
  type: GET_NEWS_ITEMS_SUCCESS,
  payload: { data },
});

export const getNewsItemsError = error => ({
  type: GET_NEWS_ITEMS_ERROR,
  payload: { error },
});

export const getNewsItems = (params={}) => new DispatchAPI().get(
  newsItemsURL,
  getNewsItemsBegin,
  getNewsItemsSuccess,
  getNewsItemsError,
  null,
  params,
);

export const refreshNewsItemsBegin = data => ({
  type: REFRESH_NEWS_ITEMS_BEGIN,
  payload: { data },
});

export const refreshNewsItemsSuccess = data => ({
  type: REFRESH_NEWS_ITEMS_SUCCESS,
  payload: { data },
});

export const refreshNewsItemsError = error => ({
  type: REFRESH_NEWS_ITEMS_ERROR,
  payload: { error },
});

export const refreshNewsItems = id => new DispatchAPI().get(
  newsItemsURL,
  refreshNewsItemsBegin,
  refreshNewsItemsSuccess,
  refreshNewsItemsError,
  id,
);

export const clearNewsItems = () => ({
  type: CLEAR_NEWS_ITEMS,
});

export const prependNewsItems = news_item => ({
  type: PREPEND_NEWS_ITEMS,
  news_item: news_item,
});
