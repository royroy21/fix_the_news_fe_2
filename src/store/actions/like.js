import DispatchAPI from "../../api";
import {likesURL} from "../../settings";
import {refreshTopic} from "./topics";
import {refreshCategoryNewsItem} from "./categoryNewsItems";

export const POST_LIKE_BEGIN   = 'POST_LIKE_BEGIN';
export const POST_LIKE_SUCCESS = 'POST_LIKE_SUCCESS';
export const POST_LIKE_ERROR = 'POST_LIKE_ERROR';
export const DELETE_LIKE_BEGIN   = 'DELETE_LIKE_BEGIN';
export const DELETE_LIKE_SUCCESS = 'DELETE_LIKE_SUCCESS';
export const DELETE_LIKE_ERROR = 'DELETE_LIKE_ERROR';
export const CLEAR_LIKE = 'CLEAR_LIKE';

export const postLikeBegin = data => ({
  type: POST_LIKE_BEGIN,
  payload: { data },
});

export const postLikeSuccess = data => ({
  type: POST_LIKE_SUCCESS,
  payload: { data }
});

export const postLikeError = error => ({
  type: POST_LIKE_ERROR,
  payload: { error }
});

export const postLikeTopicTopNewsItem = (data, topicSlug) => new DispatchAPI().create(
  likesURL,
  postLikeBegin,
  postLikeSuccess,
  postLikeError,
  data,
  null,
  [() => refreshTopic(topicSlug)],
);

export const postLikeNewsItem = (data, newsItemId, topicSlug) => new DispatchAPI().create(
  likesURL,
  postLikeBegin,
  postLikeSuccess,
  postLikeError,
  data,
  null,
  [
    () => refreshCategoryNewsItem(newsItemId),
    () => refreshTopic(topicSlug),
  ],
);

export const deleteLikeBegin = data => ({
  type: DELETE_LIKE_BEGIN,
});

export const deleteLikeSuccess = data => ({
  type: DELETE_LIKE_SUCCESS,
});

export const deleteLikeError = error => ({
  type: DELETE_LIKE_ERROR,
  payload: { error }
});

export const deleteLikeTopicTopNewsItem = (id, topicSlug) => new DispatchAPI().delete(
  likesURL,
  deleteLikeBegin,
  deleteLikeSuccess,
  deleteLikeError,
  id,
  null,
  [() => refreshTopic(topicSlug)],
);

export const deleteLikeNewsItem = (id, newsItemId, topicSlug) => new DispatchAPI().delete(
  likesURL,
  deleteLikeBegin,
  deleteLikeSuccess,
  deleteLikeError,
  id,
  null,
  [
    () => refreshCategoryNewsItem(newsItemId),
    () => refreshTopic(topicSlug)
  ],
);

export const clearLike = (params) => ({
  type: CLEAR_LIKE,
  params,
});
