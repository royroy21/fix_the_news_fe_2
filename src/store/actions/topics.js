import DispatchAPI from "../../api";
import {topicsURL} from "../../settings";

export const GET_TOPICS_BEGIN   = 'GET_TOPICS_BEGIN';
export const GET_TOPICS_SUCCESS = 'GET_TOPICS_SUCCESS';
export const GET_TOPICS_ERROR = 'GET_TOPICS_ERROR';
export const REFRESH_TOPIC_BEGIN   = 'REFRESH_TOPIC_BEGIN';
export const REFRESH_TOPIC_SUCCESS = 'REFRESH_TOPIC_SUCCESS';
export const REFRESH_TOPIC_ERROR = 'REFRESH_TOPIC_ERROR';
export const CLEAR_TOPICS = 'CLEAR_TOPICS';
export const PREPEND_TOPIC = 'PREPEND_TOPIC';

export const getTopicsBegin = data => ({
  type: GET_TOPICS_BEGIN,
  payload: { data },
});

export const getTopicsSuccess = data => ({
  type: GET_TOPICS_SUCCESS,
  payload: { data },
});

export const getTopicsError = error => ({
  type: GET_TOPICS_ERROR,
  payload: { error },
});

export const getTopics = (params={}) => new DispatchAPI().get(
  topicsURL,
  getTopicsBegin,
  getTopicsSuccess,
  getTopicsError,
  null,
  params,
);

export const refreshTopicBegin = data => ({
  type: REFRESH_TOPIC_BEGIN,
  payload: { data },
});

export const refreshTopicSuccess = data => ({
  type: REFRESH_TOPIC_SUCCESS,
  payload: { data },
});

export const refreshTopicError = error => ({
  type: REFRESH_TOPIC_ERROR,
  payload: { error },
});

export const refreshTopic = id => new DispatchAPI().get(
  topicsURL,
  refreshTopicBegin,
  refreshTopicSuccess,
  refreshTopicError,
  id,
);

export const clearTopics = () => ({
  type: CLEAR_TOPICS,
});

export const prependTopic = topic => ({
  type: PREPEND_TOPIC,
  topic: topic,
});
