import {getUser} from "./user";
import DispatchAPI from "../../api";
import {
  tokenLoginURL,
  TOPIC_PAGE_SIZE_FOR_DESKTOP,
  TOPIC_PAGE_SIZE_FOR_MOBILE
} from "../../settings";
import {clearTopics, getTopics} from "./topics";
import {clearCategoryNewsItems} from "./categoryNewsItems";

export const POST_TOKEN_BEGIN   = 'POST_TOKEN_BEGIN';
export const POST_TOKEN_SUCCESS = 'POST_TOKEN_SUCCESS';
export const POST_TOKEN_ERROR = 'POST_TOKEN_ERROR';
export const CLEAR_TOKEN = 'CLEAR_TOKEN';

export const postTokenBegin = data => ({
  type: POST_TOKEN_BEGIN,
  payload: { data },
});

export const postTokenSuccess = data => ({
  type: POST_TOKEN_SUCCESS,
  payload: { data }
});

export const postTokenError = error => ({
  type: POST_TOKEN_ERROR,
  payload: { error }
});

export const clearToken = () => ({
  type: CLEAR_TOKEN,
});

export const postToken = (data, isMobile=false) => new DispatchAPI().create(
  tokenLoginURL,
  postTokenBegin,
  postTokenSuccess,
  postTokenError,
  data,
  null,
  [
    clearTopics,
    clearCategoryNewsItems,
    getUser,
    () => getTopics(isMobile ? {size: TOPIC_PAGE_SIZE_FOR_MOBILE} : {size: TOPIC_PAGE_SIZE_FOR_DESKTOP}),
  ]
);
