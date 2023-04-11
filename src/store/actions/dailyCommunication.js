import DispatchAPI from "../../api";
import {communicationsURL} from "../../settings";

export const GET_DAILY_COMMUNICATION_BEGIN   = 'GET_DAILY_COMMUNICATION_BEGIN';
export const GET_DAILY_COMMUNICATION_SUCCESS = 'GET_DAILY_COMMUNICATION_SUCCESS';
export const GET_DAILY_COMMUNICATION_ERROR = 'GET_DAILY_COMMUNICATION_ERROR';

export const getDailyCommunicationBegin = data => ({
  type: GET_DAILY_COMMUNICATION_BEGIN,
  payload: { data },
});

export const getDailyCommunicationSuccess = data => ({
  type: GET_DAILY_COMMUNICATION_SUCCESS,
  payload: { data }
});

export const getDailyCommunicationError = error => ({
  type: GET_DAILY_COMMUNICATION_ERROR,
  payload: { error }
});

export const getDailyCommunication = () => new DispatchAPI().get(
  communicationsURL,
  getDailyCommunicationBegin,
  getDailyCommunicationSuccess,
  getDailyCommunicationError,
  'daily',
);
