import DispatchAPI from "../../api";
import {commentsURL} from "../../settings";

export const GET_TOPIC_COMMENTS_BEGIN   = 'GET_TOPIC_COMMENTS_BEGIN';
export const GET_TOPIC_COMMENTS_SUCCESS = 'GET_TOPIC_COMMENTS_SUCCESS';
export const GET_TOPIC_COMMENTS_ERROR = 'GET_TOPIC_COMMENTS_ERROR';
export const CLEAR_TOPIC_COMMENTS = 'CLEAR_TOPIC_COMMENTS';

export const getTopicCommentsBegin = (data, params) => ({
  type: GET_TOPIC_COMMENTS_BEGIN,
  params,
  payload: { data },
});

export const getTopicCommentsSuccess = (data, params) => ({
  type: GET_TOPIC_COMMENTS_SUCCESS,
  params,
  payload: { data },
});

export const getTopicCommentsError = (error, params) => ({
  type: GET_TOPIC_COMMENTS_ERROR,
  params,
  payload: { error },
});

export const clearTopicComments = (params) => ({
  type: CLEAR_TOPIC_COMMENTS,
  params,
});

export const getTopicComments = (params={}) => new DispatchAPI().get(
  commentsURL,
  getTopicCommentsBegin,
  getTopicCommentsSuccess,
  getTopicCommentsError,
  null,
  params,
);
