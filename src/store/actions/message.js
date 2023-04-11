import DispatchAPI from "../../api";
import {messagesURL} from "../../settings";

export const POST_MESSAGE_BEGIN   = 'POST_MESSAGE_BEGIN';
export const POST_MESSAGE_SUCCESS = 'POST_MESSAGE_SUCCESS';
export const POST_MESSAGE_ERROR = 'POST_MESSAGE_ERROR';
export const CLEAR_MESSAGE = 'CLEAR_MESSAGE';

export const postMessageBegin = data => ({
  type: POST_MESSAGE_BEGIN,
  payload: { data },
});

export const postMessageSuccess = data => ({
  type: POST_MESSAGE_SUCCESS,
  payload: { data }
});

export const postMessageError = error => ({
  type: POST_MESSAGE_ERROR,
  payload: { error }
});

export const clearMessage = () => ({
  type: CLEAR_MESSAGE,
});


export const postMessage = data => new DispatchAPI().create(
  messagesURL,
  postMessageBegin,
  postMessageSuccess,
  postMessageError,
  data,
);
