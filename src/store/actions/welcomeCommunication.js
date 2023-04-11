import DispatchAPI from "../../api";
import {communicationsURL} from "../../settings";

export const GET_WELCOME_COMMUNICATION_BEGIN   = 'GET_WELCOME_COMMUNICATION_BEGIN';
export const GET_WELCOME_COMMUNICATION_SUCCESS = 'GET_WELCOME_COMMUNICATION_SUCCESS';
export const GET_WELCOME_COMMUNICATION_ERROR = 'GET_WELCOME_COMMUNICATION_ERROR';

export const getWelcomeCommunicationBegin = data => ({
  type: GET_WELCOME_COMMUNICATION_BEGIN,
  payload: { data },
});

export const getWelcomeCommunicationSuccess = data => ({
  type: GET_WELCOME_COMMUNICATION_SUCCESS,
  payload: { data }
});

export const getWelcomeCommunicationError = error => ({
  type: GET_WELCOME_COMMUNICATION_ERROR,
  payload: { error }
});

export const getWelcomeCommunication = () => new DispatchAPI().get(
  communicationsURL,
  getWelcomeCommunicationBegin,
  getWelcomeCommunicationSuccess,
  getWelcomeCommunicationError,
  'welcome',
);
