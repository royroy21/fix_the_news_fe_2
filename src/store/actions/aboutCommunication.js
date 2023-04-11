import DispatchAPI from "../../api";
import {communicationsURL} from "../../settings";

export const GET_ABOUT_COMMUNICATION_BEGIN   = 'GET_ABOUT_COMMUNICATION_BEGIN';
export const GET_ABOUT_COMMUNICATION_SUCCESS = 'GET_ABOUT_COMMUNICATION_SUCCESS';
export const GET_ABOUT_COMMUNICATION_ERROR = 'GET_ABOUT_COMMUNICATION_ERROR';

export const getAboutCommunicationBegin = data => ({
  type: GET_ABOUT_COMMUNICATION_BEGIN,
  payload: { data },
});

export const getAboutCommunicationSuccess = data => ({
  type: GET_ABOUT_COMMUNICATION_SUCCESS,
  payload: { data }
});

export const getAboutCommunicationError = error => ({
  type: GET_ABOUT_COMMUNICATION_ERROR,
  payload: { error }
});

export const getAboutCommunication = () => new DispatchAPI().get(
  communicationsURL,
  getAboutCommunicationBegin,
  getAboutCommunicationSuccess,
  getAboutCommunicationError,
  'about',
);
