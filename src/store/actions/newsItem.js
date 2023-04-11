import DispatchAPI from "../../api";
import {newsItemsURL, TOPIC_PAGE_SIZE_FOR_MOBILE} from "../../settings";
import {
  clearCategoryNewsItem,
  getCategoryNewsItems,
} from "./categoryNewsItems";
import {getTopics} from "./topics";

export const POST_NEWS_ITEM_BEGIN   = 'POST_NEWS_ITEM_BEGIN';
export const POST_NEWS_ITEM_SUCCESS = 'POST_NEWS_ITEM_SUCCESS';
export const POST_NEWS_ITEM_ERROR = 'POST_NEWS_ITEM_ERROR';
export const CLEAR_NEWS_ITEM = 'CLEAR_NEWS_ITEM';

export const postNewsItemBegin = data => ({
  type: POST_NEWS_ITEM_BEGIN,
  payload: { data },
});

export const postNewsItemSuccess = data => ({
  type: POST_NEWS_ITEM_SUCCESS,
  payload: { data }
});

export const postNewsItemError = error => ({
  type: POST_NEWS_ITEM_ERROR,
  payload: { error }
});

export const clearNewsItem = () => ({
  type: CLEAR_NEWS_ITEM,
});

export const postNewsItem = (data, isMobile) => new DispatchAPI().create(
  newsItemsURL,
  postNewsItemBegin,
  postNewsItemSuccess,
  postNewsItemError,
  data,
  null,
  [
    () => getTopics(isMobile ? {size: TOPIC_PAGE_SIZE_FOR_MOBILE} : {}),
    () => clearCategoryNewsItem(data.get("category")),
    () => getCategoryNewsItems({
      topic: data.get("topic"),
      category: data.get("category"),
    }),
  ]
);
