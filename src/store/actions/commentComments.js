import DispatchAPI from "../../api";
import {commentsURL} from "../../settings";

export const GET_COMMENT_COMMENTS_BEGIN   = 'GET_COMMENT_COMMENTS_BEGIN';
export const GET_COMMENT_COMMENTS_SUCCESS = 'GET_COMMENT_COMMENTS_SUCCESS';
export const GET_COMMENT_COMMENTS_ERROR = 'GET_COMMENT_COMMENTS_ERROR';
export const CLEAR_COMMENT_COMMENTS = 'CLEAR_COMMENT_COMMENTS';

export const getCommentCommentsBegin = (data, params) => ({
  type: GET_COMMENT_COMMENTS_BEGIN,
  params,
  payload: { data },
});

export const getCommentCommentsSuccess = (data, params) => ({
  type: GET_COMMENT_COMMENTS_SUCCESS,
  params,
  payload: { data },
});

export const getCommentCommentsError = (error, params) => ({
  type: GET_COMMENT_COMMENTS_ERROR,
  params,
  payload: { error },
});

export const clearCommentComments = (params) => ({
  type: CLEAR_COMMENT_COMMENTS,
  params,
});

export const getCommentComments = (params={}) => new DispatchAPI().get(
  commentsURL,
  getCommentCommentsBegin,
  getCommentCommentsSuccess,
  getCommentCommentsError,
  null,
  params,
);
