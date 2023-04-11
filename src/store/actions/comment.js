import DispatchAPI from "../../api";
import {commentsURL} from "../../settings";
import {clearTopicComments, getTopicComments} from "./topicComments";
import {clearCommentComments, getCommentComments} from "./commentComments";

export const POST_COMMENT_BEGIN   = 'POST_COMMENT_BEGIN';
export const POST_COMMENT_SUCCESS = 'POST_COMMENT_SUCCESS';
export const POST_COMMENT_ERROR = 'POST_COMMENT_ERROR';
export const CLEAR_COMMENT = 'CLEAR_COMMENT';

export const postCommentBegin = data => ({
  type: POST_COMMENT_BEGIN,
  payload: { data },
});

export const postCommentSuccess = data => ({
  type: POST_COMMENT_SUCCESS,
  payload: { data }
});

export const postCommentError = error => ({
  type: POST_COMMENT_ERROR,
  payload: { error }
});

export const clearComment = (params) => ({
  type: CLEAR_COMMENT,
  params,
});

export const postCommentComment = (data) => new DispatchAPI().create(
  commentsURL,
  postCommentBegin,
  postCommentSuccess,
  postCommentError,
  data,
  null,
  [
    () => clearCommentComments({comment: data.get("comment")}),
    () => getCommentComments({comment: data.get("comment")}),
  ]
);

export const postTopicComment = (data) => new DispatchAPI().create(
  commentsURL,
  postCommentBegin,
  postCommentSuccess,
  postCommentError,
  data,
  null,
  [
    () => clearTopicComments({topic: data.get("topic")}),
    () => getTopicComments({topic: data.get("topic")}),
  ]
);
