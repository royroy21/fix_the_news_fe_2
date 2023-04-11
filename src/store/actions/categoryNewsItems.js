import DispatchAPI from "../../api";
import {newsItemsURL} from "../../settings";

export const GET_CATEGORY_NEWS_ITEMS_BEGIN   = 'GET_CATEGORY_NEWS_ITEMS_BEGIN';
export const GET_CATEGORY_NEWS_ITEMS_SUCCESS = 'GET_CATEGORY_NEWS_ITEMS_SUCCESS';
export const GET_CATEGORY_NEWS_ITEMS_ERROR = 'GET_CATEGORY_NEWS_ITEMS_ERROR';
export const REFRESH_CATEGORY_NEWS_ITEM_BEGIN   = 'REFRESH_CATEGORY_NEWS_ITEM_BEGIN';
export const REFRESH_CATEGORY_NEWS_ITEM_SUCCESS = 'REFRESH_CATEGORY_NEWS_ITEM_SUCCESS';
export const REFRESH_CATEGORY_NEWS_ITEM_ERROR = 'REFRESH_CATEGORY_NEWS_ITEM_ERROR';
export const CLEAR_CATEGORY_NEWS_ITEMS = 'CLEAR_CATEGORY_NEWS_ITEMS';
export const CLEAR_CATEGORY_NEWS_ITEM = 'CLEAR_CATEGORY_NEWS_ITEM';

export const getCategoryNewsItemsBegin = (data, params) => ({
  type: GET_CATEGORY_NEWS_ITEMS_BEGIN,
  params,
  payload: { data },
});

export const getCategoryNewsItemsSuccess = (data, params) => ({
  type: GET_CATEGORY_NEWS_ITEMS_SUCCESS,
  params,
  payload: { data },
});

export const getCategoryNewsItemsError = (error, params) => ({
  type: GET_CATEGORY_NEWS_ITEMS_ERROR,
  params,
  payload: { error },
});

export const clearCategoryNewsItems = () => ({
  type: CLEAR_CATEGORY_NEWS_ITEMS,
});

export const clearCategoryNewsItem = category => ({
  type: CLEAR_CATEGORY_NEWS_ITEM,
  category,
});

export const getCategoryNewsItems = (params={}) => new DispatchAPI().get(
  newsItemsURL,
  getCategoryNewsItemsBegin,
  getCategoryNewsItemsSuccess,
  getCategoryNewsItemsError,
  null,
  params,
);

export const refreshCategoryNewsItemBegin = data => ({
  type: REFRESH_CATEGORY_NEWS_ITEM_BEGIN,
  payload: { data },
});

export const refreshCategoryNewsItemSuccess = data => ({
  type: REFRESH_CATEGORY_NEWS_ITEM_SUCCESS,
  payload: { data },
});

export const refreshCategoryNewsItemError = error => ({
  type: REFRESH_CATEGORY_NEWS_ITEM_ERROR,
  payload: { error },
});

export const refreshCategoryNewsItem = id => new DispatchAPI().get(
  newsItemsURL,
  refreshCategoryNewsItemBegin,
  refreshCategoryNewsItemSuccess,
  refreshCategoryNewsItemError,
  id,
);
